import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './orderStyle';
import {Strings, Routes} from '../../constants';
import useOrder from './useOrder';
import {AppStyle} from '../../theme';
import {CustomButton} from '../../components';

const ListEmptyComponent = ({navigation}) => {
  const shopNow = () => {
    navigation.jumpTo(Routes.stack);
  };

  return (
    <View style={styles.noOrdersContainer}>
      <Text style={styles.noOrdersText}>{Strings.noOrders}</Text>
      <CustomButton
        onPress={shopNow}
        textStyle={styles.shoppingButtonText}
        text={Strings.shopNow}
        buttonStyle={styles.shoppingButton}
      />
    </View>
  );
};

const Item = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.flexRow}>
        <Text style={styles.amountHeader}>{Strings.totalAmount}:</Text>
        <Text style={styles.amount}>
          {item?.order_value?.formatted_with_symbol}
        </Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.amountHeader}>{Strings.status}:</Text>
        <Text style={styles.fulfilledColor}>{item?.status_fulfillment}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.amountHeader}>{Strings.totalItems}:</Text>
        <Text style={styles.amount}>
          {item?.order?.line_items.length} {Strings.items}
        </Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.amountHeader}>{Strings.referenceId}:</Text>
        <Text style={styles.amount}>{item?.customer_reference}</Text>
      </View>
    </View>
  );
};

const OrderScreen = ({navigation}) => {
  const {order} = useOrder();

  return (
    <View style={styles.container}>
      {order ? (
        <FlatList
          keyExtractor={(item, index) => item + index}
          ListEmptyComponent={<ListEmptyComponent {...{navigation}} />}
          renderItem={({item}) => <Item {...{item}} />}
          data={order?.data}
        />
      ) : (
        <ActivityIndicator
          style={AppStyle.activityIndicator}
          animating={true}
        />
      )}
    </View>
  );
};

export default OrderScreen;
