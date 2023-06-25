import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './checkoutScreenStyle';
import {CheckoutProduct, PurchasedItemFlatList} from '../render-items';
import {Routes, Strings} from '../../../constants';
import {CustomButton} from '../../../components';
import images from '../../../assets/images';
import useCheckout from '../useCheckout';

const CheckoutScreen = ({navigation, route}) => {
  const {data, load, refreshFunction} = useCheckout({route, navigation});

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={refreshFunction} refreshing={load} />
      }
      contentContainerStyle={styles.alignContainer}
      style={styles.container}>
      <View style={styles.successfulOrderContainer}>
        <Text style={styles.successfulOrder}>{Strings.success}</Text>
        <Image style={styles.tickImage} source={{uri: images.tick}} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.priceDetailsContainer}>
          <Text style={styles.priceDetails}>{Strings.priceDetails}</Text>
        </View>
        {data?.line_items ? (
          <PurchasedItemFlatList cart={data.line_items} data={data} />
        ) : (
          data && <CheckoutProduct product={data} />
        )}
      </View>
      <CustomButton
        text={Strings.goHome}
        textStyle={styles.checkoutText}
        buttonStyle={styles.checkoutButton}
        onPress={() => navigation.replace(Routes.home)}
      />
    </ScrollView>
  );
};

export default CheckoutScreen;
