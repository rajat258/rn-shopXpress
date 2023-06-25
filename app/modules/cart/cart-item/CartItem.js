import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './cartItemStyle';
import {CartBottom} from '../cart-bottom';

const CartItem = ({item, totalAmount, idWithQuantity, cart}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{item.name}</Text>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={{uri: item.image.url}}
      />
      <Text style={styles.price}>{item.price.formatted_with_symbol}</Text>
      <CartBottom {...{item, totalAmount, idWithQuantity, cart}} />
    </View>
  );
};

export default CartItem;
