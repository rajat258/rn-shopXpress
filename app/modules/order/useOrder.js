import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {orderSliceAction} from '../../redux';

const useOrder = () => {
  const order = useSelector(state => state.order?.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderSliceAction.defaultActionInitializeOrders());
  }, []);

  return {order};
};

export default useOrder;
