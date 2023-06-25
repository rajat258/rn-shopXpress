import {Text, View} from 'react-native';
import React from 'react';
import styles from './itemStyle';

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text ellipsizeMode="tail" style={styles.name}>
        {item?.name}
      </Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>
          ${item?.price?.formatted_with_symbol}
        </Text>
      </View>
    </View>
  );
};

export default Item;
