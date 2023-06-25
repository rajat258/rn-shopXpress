import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Routes} from '../../../constants';
import {commonUtils} from '../../../utils';

const useCart = () => {
  const navigation = useNavigation();
  const {createOrder, getQuantity} = commonUtils();
  const allProducts = useSelector(state => state.product?.products);
  const cart = useSelector(state => state.cart?.cart);
  const actionLoad = useSelector(state => state.cart?.load);
  const [idWithQuantity, setIdWithQuantity] = useState();

  useEffect(() => {
    const temp = getQuantity({
      cart: cart?.line_items,
      product: allProducts,
    });
    setIdWithQuantity(temp);
  }, []);

  const shopNow = () => {
    navigation.goBack();
  };

  const checkout = async () => {
    const temp_cart = cart;
    await createOrder();
    navigation.replace(Routes.checkout, {cart: temp_cart});
  };

  return {
    checkout,
    cart,
    idWithQuantity,
    actionLoad,
    shopNow,
  };
};

export default useCart;
