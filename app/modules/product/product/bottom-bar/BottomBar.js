import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import bottomBarStyle from './bottomBarStyle';
import {Strings} from '../../../../constants';
import useBottom from './useBottom';

const BottomBar = ({product, marginTop = '0%'}) => {
  const {addCart, actionLoad} = useBottom({product});
  const styles = bottomBarStyle(marginTop);

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>
          {product?.price?.formatted_with_symbol}
        </Text>
      </View>
      <TouchableOpacity
        disabled={actionLoad}
        onPress={addCart}
        style={styles.addToCartButton}>
        <Text style={styles.addText}>{Strings.add}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
