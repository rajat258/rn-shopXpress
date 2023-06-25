import {Text, View} from 'react-native';
import React from 'react';
import styles from './totalAmountStyle';
import {Strings} from '../../../constants';

const TotalAmount = ({totalAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Strings.totalAmount} : {totalAmount}
      </Text>
    </View>
  );
};

export default TotalAmount;
