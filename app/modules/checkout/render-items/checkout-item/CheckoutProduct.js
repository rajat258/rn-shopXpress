import {Text, View} from 'react-native';
import React from 'react';
import styles from './checkoutProductStyle';
import {Strings} from '../../../../constants';

const CheckoutProduct = ({product}) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <Text ellipsizeMode="tail" style={styles.name}>
          {product?.name}
        </Text>
        <View style={styles.price}>
          <Text style={styles.priceText}>
            {product?.price?.formatted_with_symbol}
          </Text>
        </View>
      </View>
      <View style={styles.footerComponent}>
        <View style={styles.footerLine} />
        <View style={styles.flexRow}>
          <Text style={styles.totalAmountText}>{Strings.totalAmount}</Text>
          <Text style={styles.totalAmountText}>
            {product?.price?.formatted_with_symbol}
          </Text>
        </View>
      </View>
    </>
  );
};

export default CheckoutProduct;
