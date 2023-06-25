import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './purchasedItemStyle';
import {Item} from '../item';
import {Strings} from '../../../../constants';

const FooterComponent = ({data}) => {
  return (
    <View style={styles.footerComponent}>
      <View style={styles.footerLine} />
      <View style={styles.flexRow}>
        <Text style={styles.totalAmountText}>{Strings.totalAmount}</Text>
        <Text style={styles.totalAmountText}>
          {data?.subtotal?.formatted_with_symbol}
        </Text>
      </View>
      <Text style={styles.discountedText}>
        {Strings.saved}
        {Strings.order}
      </Text>
    </View>
  );
};

const PurchasedItemFlatList = ({data, cart}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item + index}
      scrollEnabled={false}
      ListFooterComponent={<FooterComponent {...{data}} />}
      data={cart}
      renderItem={({item}) => <Item {...{item}} />}
    />
  );
};

export default PurchasedItemFlatList;
