import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import cartScreenStyle from './cartScreenStyle';
import {CustomButton} from '../../../components';
import {Strings} from '../../../constants';
import {AppStyle} from '../../../theme';
import {CartItem} from '../cart-item';
import {TotalAmount} from '../total-amount';
import useCart from './useCart';

const ListEmptyComponent = ({styles, shopNow}) => {
  return (
    <View style={styles.listEmptyComponent}>
      <Text style={styles.text}>{Strings.emptyCart}</Text>
      <CustomButton
        onPress={shopNow}
        textStyle={styles.shoppingButtonText}
        text={Strings.shopNow}
        buttonStyle={styles.shoppingButton}
      />
    </View>
  );
};

const ProceedToCart = ({cart, checkout, actionLoad, styles}) => {
  return (
    <>
      {cart?.line_items.length !== 0 && (
        <>
          <CustomButton
            disable={actionLoad}
            text={Strings.checkout}
            textStyle={styles.checkoutText}
            buttonStyle={styles.checkoutButton}
            onPress={async () => checkout()}
          />
        </>
      )}
    </>
  );
};

const CartScreen = ({navigation}) => {
  const {cart, checkout, idWithQuantity, actionLoad, shopNow} = useCart();
  const styles = cartScreenStyle(actionLoad);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={AppStyle.activityIndicator}
        animating={actionLoad}
      />
      {cart ? (
        <FlatList
          numColumns={2}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <TotalAmount totalAmount={cart.subtotal?.formatted_with_symbol} />
          }
          ListFooterComponent={
            <ProceedToCart {...{cart, checkout, actionLoad, styles}} />
          }
          ListEmptyComponent={
            <ListEmptyComponent {...{styles, navigation, shopNow}} />
          }
          data={cart?.line_items}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CartItem
              {...{item, idWithQuantity, cart}}
              totalAmount={cart?.formatted_with_symbol}
            />
          )}
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

export default CartScreen;
