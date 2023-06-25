import {useDispatch, useSelector} from 'react-redux';
import {alertBox} from '../../../components';
import {Strings} from '../../../constants';
import {cartActions} from '../../../redux';

const useCartBottom = ({item, cart, idWithQuantity}) => {
  const dispatch = useDispatch();
  const actionLoad = useSelector(state => state.cart?.load);

  const deleteItem = async () => {
    dispatch(cartActions.defaultDeleteItem({itemId: item.id}));
  };

  const updateItem = async quantity => {
    dispatch(cartActions.defaultUpdateCart({quantity, itemId: item.id}));
  };

  const incrementItem = async () => {
    let quantity = 0;
    cart?.line_items?.forEach(e => {
      if (e.product_id === item.product_id) {
        if (idWithQuantity[e.product_id] === quantity + 1) {
          alertBox(Strings.highestQuantity);
        } else {
          quantity = e.quantity + 1;
          updateItem(quantity);
        }
      }
    });
  };

  const decrementItem = () => {
    let quantity = 0;
    cart?.line_items?.forEach(e => {
      if (e.product_id === item.product_id) {
        quantity = e.quantity - 1;
      }
    });
    if (quantity <= 0) {
      deleteItem();
    } else {
      updateItem(quantity);
    }
  };

  return {
    decrementItem,
    incrementItem,
    deleteItem,
    actionLoad,
  };
};

export default useCartBottom;
