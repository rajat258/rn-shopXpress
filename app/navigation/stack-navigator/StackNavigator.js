import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import images from '../../assets/images';
import {DrawerIcon} from '../../components';
import {Routes, Strings} from '../../constants';
import {
  CartScreen,
  CheckoutScreen,
  HomeScreen,
  ProductDetailedScreen,
  ProductScreen,
} from '../../modules';
import {colors, moderateScale} from '../../theme';
import styles from './styles';

const Stack = createStackNavigator();

const DrawerIconFun = ({navigation}) => <DrawerIcon {...navigation} />;
const CartIcon = ({navigation}) => {
  const counter = useSelector(state => state.cart?.counter);
  const cart = useSelector(state => state.cart?.cart);

  return (
    <>
      {cart && (
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.cart)}
          style={styles.button}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{counter}</Text>
          </View>
          <Image source={images.cart} style={styles.image} />
        </TouchableOpacity>
      )}
    </>
  );
};

const StackNavigator = () => {
  const tabBarIconHome = ({navigation}) => {
    if (navigation.isFocused()) {
      return <Image source={images['homeFocused']} style={styles.image} />;
    }
    return <Image source={images.home} style={styles.image} />;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: moderateScale(16)},
      }}>
      <Stack.Screen
        options={({navigation}) => ({
          headerStyle: {backgroundColor: colors.darkGreen},
          headerRight: () => CartIcon({navigation}),
          headerLeft: () => DrawerIconFun({navigation}),
          tabBarIcon: () => tabBarIconHome({navigation}),
        })}
        component={HomeScreen}
        name={Routes.home}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: colors.darkGreen},
          headerBackTitleStyle: {color: colors.white},
        }}
        component={ProductScreen}
        name={Routes.product}
      />
      <Stack.Screen
        options={{
          title: Strings.productDetails,
          headerStyle: {backgroundColor: colors.darkGreen},
          headerBackTitleStyle: {color: colors.white},
        }}
        component={ProductDetailedScreen}
        name={Routes.productDetail}
      />
      <Stack.Screen
        options={{
          title: Strings.cart,
          headerStyle: {backgroundColor: colors.darkGreen},
          headerBackTitleStyle: {color: colors.white},
        }}
        component={CartScreen}
        name={Routes.cart}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: colors.darkGreen},
          headerBackTitleStyle: {color: colors.white},
        }}
        component={CheckoutScreen}
        name={Routes.checkout}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
