import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getData} from '../../../api';
import {ApiStrings} from '../../../constants';

const useProduct = ({id}) => {
  const [data, setData] = useState(null);
  const actionLoad = useSelector(state => state.cart?.load);

  const getProducts = async () => {
    const res = await getData(`${ApiStrings.getIdWiseProduct}${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {data, actionLoad};
};

export default useProduct;
