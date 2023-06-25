import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {alertBox} from '../components';
import {Routes, Strings} from '../constants';
import {
  activeUserActions,
  cartActions,
  orderSliceAction,
  productSliceAction,
} from '../redux';
import {killAsyncId} from '../services';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logoutFunction = async () => {
    dispatch(activeUserActions.deleteUser());
    dispatch(cartActions.clearCart());
    dispatch(orderSliceAction.clearOrders());
    dispatch(productSliceAction.deleteProducts());
    await killAsyncId();
    navigation.reset({index: 0, routes: [{name: Routes.login}]});
  };

  const logout = () => {
    alertBox(
      Strings.logout,
      Strings.sureLogout,
      logoutFunction,
      Strings.ok,
      Strings.cancelString,
    );
  };

  return {logout};
};

export default useLogout;
