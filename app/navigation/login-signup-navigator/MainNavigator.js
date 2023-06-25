import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen, SignupScreen, SplashScreen} from '../../modules';
import {DrawerNavigator} from '../drawer-navigator';

const Stack = createStackNavigator();

const MainNavigator = ({screen}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen component={SplashScreen} name="Splash" />
        <Stack.Screen component={LoginScreen} name="Login" />
        <Stack.Screen component={SignupScreen} name="Signup" />
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
