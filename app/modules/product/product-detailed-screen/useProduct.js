import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {postData} from '../../../api';
import {alertBox} from '../../../components';
import {Routes, Strings} from '../../../constants';
import {cartActions} from '../../../redux';
import {commonUtils} from '../../../utils';

const useProduct = ({params}) => {
  const navigation = useNavigation();
  const product = params;
  const actionLoad = useSelector(state => state.cart?.load);
  const activeUser = useSelector(state => state.activeUser?.data);
  const cart = useSelector(state => state.cart?.cart);
  const dispatch = useDispatch();
  const {buyNow} = commonUtils();

  const addtoCart = async () => {
    dispatch(cartActions.updateLoad());
    const checkItemExist = cart?.line_items?.filter(
      e => e?.product_id === product.id,
    )[0];
    if (checkItemExist) {
      alertBox(Strings.alreadyInCart);
    } else {
      const body = {
        id: product.id,
        quantity: 1,
      };
      const res = await postData({
        endpoint: `carts/${activeUser?.meta?.cartId}`,
        body: body,
      });
      dispatch(cartActions.incrementCounter({cart: res}));
    }
    dispatch(cartActions.updateLoad());
  };

  const buyNowFunction = async () => {
    dispatch(cartActions.updateLoad());
    await buyNow({permalink: product.permalink});
    dispatch(cartActions.updateLoad());
    navigation.replace(Routes.checkout, {cart: product});
  };

  return {
    addtoCart,
    product,
    actionLoad,
    buyNowFunction,
  };
};

export default useProduct;
