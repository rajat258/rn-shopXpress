import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Routes} from '../../constants';

const useCheckout = ({route, navigation}) => {
  const focus = useIsFocused();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setData(route.params?.cart);
    if (!focus) {
      navigation.replace(Routes.drawer);
    }
  }, [focus]);

  const refreshFunction = () => {
    setLoad(true);
    setTimeout(() => {
      navigation.replace(Routes.drawer);
      setLoad(false);
    }, 300);
  };

  return {
    data,
    load,
    refreshFunction,
  };
};

export default useCheckout;
