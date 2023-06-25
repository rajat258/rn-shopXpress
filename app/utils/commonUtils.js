import {getCart, getData, isEmailAvailable, postData, putData} from '../api';
import {ApiStrings, Strings} from '../constants';
import {
  activeUserActions,
  cartActions,
  orderSliceAction,
  productSliceAction,
  store,
} from '../redux';
import {setAsyncId} from '../services';
import {emailRegex} from './validation';

const commonUtils = () => {
  const dispatch = store.dispatch;
  const activeUser = store.getState(state => state.activeUser?.data);

  const getQuantity = ({product, cart}) => {
    let idWithProduct = {};
    cart?.forEach(e => {
      for (const p of product) {
        if (p.id === e.product_id) {
          idWithProduct[p.id] = p.inventory.available;
          break;
        }
      }
    });
    return idWithProduct;
  };

  const createCart = async () => {
    const res = await getCart();
    return res.id;
  };

  const issueJwt = async ({id}) => {
    const jwt = await postData({
      endpoint: `${ApiStrings.customer}/${id}/issue-token`,
      body: '',
    });
    return jwt.jwt;
  };

  const checkout = async ({endpoint}) => {
    const customerId = activeUser?.id;
    const checkoutRes = await getData(endpoint);
    const checkoutId = checkoutRes.id;
    const body = {
      customer: {
        id: customerId,
      },
      payment: {
        gateway: 'test_gateway',
        card: {
          number: '4242 4242 4242 4242',
          expiry_month: 11,
          expiry_year: 2028,
          cvc: 987,
          postal_zip_code: '380013',
        },
      },
    };
    return {checkoutId, body};
  };

  const buyNow = async ({permalink}) => {
    const endpoint = `${ApiStrings.checkout}/${permalink}?type=permalink`;
    const {checkoutId, body} = await checkout({endpoint});
    const orderRes = await postData({
      endpoint: `${ApiStrings.checkout}/${checkoutId}`,
      body: body,
    });
    dispatch(orderSliceAction.defaultActionAddOrders({order: orderRes}));
    return orderRes;
  };

  const createOrder = async () => {
    dispatch(cartActions.updateLoad());
    const endpoint = `${ApiStrings.checkout}/${activeUser?.meta?.cartId}?type=cart`;
    const {checkoutId, body} = await checkout({endpoint});
    const orderRes = await postData({
      endpoint: `${ApiStrings.checkout}/${checkoutId}`,
      body: body,
    });
    const cartId = await createCart();
    const cartIdBody = {
      ...activeUser,
      meta: {
        ...activeUser?.meta,
        cartId: cartId,
      },
    };
    await putData({
      endpoint: `${ApiStrings.customer}/${activeUser?.id}`,
      body: cartIdBody,
    });
    dispatch(activeUserActions.updateCartId({cartId}));
    dispatch(cartActions.clearCart());
    dispatch(orderSliceAction.defaultActionAddOrders({order: orderRes}));
    dispatch(cartActions.updateLoad());
    return orderRes;
  };

  const signupUser = async ({email, password, name, mobileNo}) => {
    const res = await isEmailAvailable(email);
    if (res !== false) {
      return false;
    } else {
      // signup
      const cartId = await createCart();
      const body = {
        email: email,
        firstname: name,
        phone: mobileNo,
        meta: {password: password, cartId: cartId},
      };
      await postData({endpoint: ApiStrings.customer, body});
      return true;
    }
  };

  const loginUser = async ({email, password}) => {
    let isUser = await isEmailAvailable(email);
    if (isUser !== false) {
      isUser = isUser[0];
      // login
      if (isUser.meta.password === password) {
        const jwtToken = await issueJwt({id: isUser.id});
        const body = {
          ...isUser,
          email: email,
          meta: {
            ...isUser.meta,
            jwt: jwtToken,
          },
        };
        await setAsyncId(body);
        dispatch(activeUserActions.defaultActionAddUser({body}));
        dispatch(productSliceAction.defaultActionAddProduct());
        return true;
      } else {
        return Strings.wrongPassword;
      }
    } else {
      return false;
    }
  };

  const checkEmail = email => {
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  };

  return {
    signupUser,
    checkEmail,
    loginUser,
    getQuantity,
    createOrder,
    buyNow,
  };
};

export default commonUtils;
