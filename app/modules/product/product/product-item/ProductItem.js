import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomBar} from '../bottom-bar';
import images from '../../../../assets/images';
import {colors} from '../../../../theme';
import useProductItem from './useProductItem';

const ProductItem = ({product}) => {
  const {liked, styles, toggleLike, onClick, actionLoad} = useProductItem({
    product,
  });

  return (
    <TouchableOpacity
      disabled={actionLoad}
      onPress={onClick}
      style={styles.container}>
      <View style={styles.ratingLikeContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.43</Text>
          <Image
            tintColor={colors.green}
            style={styles.likeImage}
            source={images.star}
          />
        </View>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
          {!liked && <Image style={styles.likeImage} source={images.like} />}
          {liked && (
            <Image
              tintColor={colors.red}
              style={styles.likeImage}
              source={images.liked}
            />
          )}
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={{uri: product?.image?.url}}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {product?.name}
        </Text>
      </View>
      <BottomBar {...{product}} />
    </TouchableOpacity>
  );
};

export default ProductItem;
