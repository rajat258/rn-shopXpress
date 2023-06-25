import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Routes} from '../../constants';
import {activeUserActions, productSliceAction} from '../../redux';
import {getAsyncId} from '../../services';

const useSplash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const id = await getAsyncId();
      if (id) {
        dispatch(activeUserActions.addUser({body: id}));
        dispatch(productSliceAction.defaultActionAddProduct());
        navigation.replace(Routes.drawer);
      } else {
        navigation.replace(Routes.login);
      }
    })();
  }, []);
};

export default useSplash;
