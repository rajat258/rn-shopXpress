import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const useSearch = ({search, setSearchedData}) => {
  const allProducts = useSelector(state => state.product?.products);

  useEffect(() => {
    if (search.trim().length) {
      const getProducts = allProducts?.filter(e =>
        e.name.toLowerCase().includes(search),
      );
      setSearchedData(getProducts);
    }
  }, [search]);
};

export default useSearch;
