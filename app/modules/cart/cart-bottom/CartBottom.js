import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../../../assets/images';
import useCartBottom from './useCartBottom';
import cartBottomStyle from './cartBottomStyle';
import {Strings} from '../../../constants';

const CartBottom = ({item, idWithQuantity, cart}) => {
  const {decrementItem, incrementItem, deleteItem, actionLoad} = useCartBottom({
    item,
    cart,
    idWithQuantity,
  });
  const styles = cartBottomStyle(actionLoad);

  return (
    <View style={styles.container}>
      <View style={styles.plusMinus}>
        <TouchableOpacity
          disabled={actionLoad}
          style={styles.plusMinusButton}
          onPress={incrementItem}>
          <Text style={styles.plusMinusText}>{Strings.plusSign}</Text>
        </TouchableOpacity>
        <View style={styles.totalItemContainer}>
          <Text style={styles.totalItem}>{item.quantity}</Text>
        </View>
        <TouchableOpacity
          disabled={actionLoad}
          style={styles.plusMinusButton}
          onPress={decrementItem}>
          <Text style={styles.plusMinusText}>{Strings.minusSign}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={actionLoad}
        onPress={deleteItem}
        style={styles.deleteButton}>
        <Image source={images.deleteIcon} style={styles.deleteImage} />
      </TouchableOpacity>
    </View>
  );
};

export default CartBottom;
