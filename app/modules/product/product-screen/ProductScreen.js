import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './productScreenStyle';
import {ProductItem} from '../product/product-item';
import useProduct from './useProduct';
import {Strings} from '../../../constants';
import {AppStyle} from '../../../theme';

const ProductScreen = ({route}) => {
  const {data, actionLoad} = useProduct({id: route.params.id});

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <ActivityIndicator
            style={AppStyle.activityIndicator}
            animating={actionLoad}
          />
          <FlatList
            numColumns={2}
            ListEmptyComponent={
              <Text style={styles.listEmptyComponent}>
                {Strings.noProducts}
              </Text>
            }
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ProductItem product={item} />}
          />
        </>
      ) : (
        <ActivityIndicator
          style={AppStyle.activityIndicator}
          animating={true}
        />
      )}
    </View>
  );
};

export default ProductScreen;
