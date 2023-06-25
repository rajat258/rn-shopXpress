import {useDispatch, useSelector} from 'react-redux';
import {postData} from '../../../../api';
import {alertBox} from '../../../../components';
import {ApiStrings, Strings} from '../../../../constants';
import {cartActions} from '../../../../redux';

const useBottom = ({product}) => {
  const activeUser = useSelector(state => state.activeUser?.data);
  const cart = useSelector(state => state.cart?.cart);
  const actionLoad = useSelector(state => state.cart?.load);
  const dispatch = useDispatch();

  const addCart = async () => {
    dispatch(cartActions.updateLoad());
    const checkItemExist =
      cart?.line_items?.filter(e => e?.product_id === product?.id)?.[0] ??
      false;
    if (checkItemExist) {
      alertBox(Strings.alreadyInCart);
    } else {
      const body = {
        id: product?.id,
        quantity: 1,
      };
      const res = await postData({
        endpoint: `${ApiStrings.cart}/${activeUser?.meta?.cartId}`,
        body: body,
      });
      dispatch(cartActions.incrementCounter({cart: res}));
    }
    dispatch(cartActions.updateLoad());
  };

  return {
    addCart,
    actionLoad,
  };
};

export default useBottom;
