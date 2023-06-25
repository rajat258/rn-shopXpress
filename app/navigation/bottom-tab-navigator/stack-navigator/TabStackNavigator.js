import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {colors, moderateScale} from '../../../theme';
import {DrawerIcon} from '../../../components';
import {CartScreen, CheckoutScreen} from '../../../modules';
import {Routes} from '../../../constants';

const Stack = createStackNavigator();
const TabStackNavigator = () => {
  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;

  return (
    <Stack.Navigator
      screenOptions={{headerTitleStyle: {fontSize: moderateScale(16)}}}>
      <Stack.Screen
        options={({navigation}) => ({
          headerStyle: {backgroundColor: colors.darkGreen},
          headerLeft: () => drawerIcon({navigation}),
        })}
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

export default TabStackNavigator;
