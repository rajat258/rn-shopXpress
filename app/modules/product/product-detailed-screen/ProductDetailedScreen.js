import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import productDetailedScreenStyle from './productDetailedScreenStyle';
import {Strings} from '../../../constants';
import images from '../../../assets/images';
import useProduct from './useProduct';
import {AppStyle, colors} from '../../../theme';

const ProductDetailedScreen = ({route}) => {
  const {product, addtoCart, buyNowFunction, actionLoad} = useProduct({
    params: route.params.product,
  });
  const styles = productDetailedScreenStyle(actionLoad);

  return (
    <ScrollView style={styles.scrollView}>
      <Image source={{uri: product?.image?.url}} style={styles.image} />
      <Text style={styles.productName}>
        {`${Strings.productName} ${product?.name}`}
      </Text>
      <View style={styles.productDetailsContainer}>
        <Text style={styles.header}>{`${Strings.productDetails}: `}</Text>
        <Text style={styles.details}>
          {product?.description?.slice(3, product?.description?.length - 4)}
        </Text>
        <Text style={styles.header}>{Strings.price}:</Text>
        <Text style={styles.details}>
          {product?.price?.formatted_with_symbol}
        </Text>
        <View style={styles.flexRow}>
          <TouchableOpacity
            disabled={actionLoad}
            onPress={addtoCart}
            style={styles.addToCart}>
            <Image
              tintColor={colors.white}
              style={styles.buttonImage}
              source={images.cart}
            />
            <Text style={styles.buttonText}>{Strings.addCart}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={actionLoad}
            onPress={buyNowFunction}
            style={styles.addToCart}>
            <Image
              tintColor={colors.white}
              style={styles.buttonImage}
              source={images.buy}
            />
            <Text style={styles.buttonText}>{Strings.buyNow}</Text>
          </TouchableOpacity>
        </View>
        <ActivityIndicator
          style={AppStyle.activityIndicator}
          animating={actionLoad}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetailedScreen;
