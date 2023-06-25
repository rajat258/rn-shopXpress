import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Routes} from '../../../../constants';
import productItemStyle from './productItemStyle';

const useProductItem = ({product}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const actionLoad = useSelector(state => state.cart?.load);
  const styles = productItemStyle(actionLoad);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const onClick = () => {
    navigation.navigate(Routes.productDetail, {product});
  };

  return {
    liked,
    styles,
    toggleLike,
    onClick,
    actionLoad,
  };
};

export default useProductItem;
