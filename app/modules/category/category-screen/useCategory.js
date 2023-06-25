import {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../../api';
import {cartActions} from '../../../redux';
import {ApiStrings} from '../../../constants';

const useCategory = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState();
  const actionLoad = useSelector(state => state.cart?.load);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    setData(await getData(ApiStrings.categories));
    dispatch(cartActions.defaultInitializeCounter());
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    data,
    search,
    searchedData,
    setSearch,
    setSearchedData,
    actionLoad,
  };
};

export default useCategory;
