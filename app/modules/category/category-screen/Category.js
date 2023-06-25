import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {SearchBar} from '../../../components';
import {CategoryFlatList} from '../category-flatlist';
import {ProductItem} from '../../product';
import {Strings} from '../../../constants';
import useCategory from './useCategory';
import {AppStyle} from '../../../theme';
import styles from './categoryStyle';

const ListEmptyComponent = () => {
  return (
    <View style={AppStyle.listEmptyComponent}>
      <Text style={AppStyle.listEmptyComponentText}>{Strings.emptyCart}</Text>
    </View>
  );
};

const Category = () => {
  const {
    data,
    search,
    searchedData,
    setSearch,
    setSearchedData,
    actionLoad,
    load,
  } = useCategory();

  return (
    <View style={styles.container}>
      {load && (
        <ActivityIndicator
          style={AppStyle.activityIndicator}
          animating={load}
        />
      )}
      {data && (
        <View style={AppStyle.flex}>
          <SearchBar {...{search, setSearch, setSearchedData}} />
          {search?.trim().length > 0 ? (
            <>
              <ActivityIndicator
                style={AppStyle.activityIndicator}
                animating={actionLoad}
              />
              <FlatList
                ListEmptyComponent={<ListEmptyComponent />}
                data={searchedData}
                numColumns={2}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <ProductItem product={item} />}
              />
            </>
          ) : (
            <CategoryFlatList {...{data}} />
          )}
        </View>
      )}
    </View>
  );
};

export default Category;
