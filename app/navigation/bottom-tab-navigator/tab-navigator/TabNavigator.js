import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerIcon} from '../../../components';
import {moderateScale, colors} from '../../../theme';
import {Image} from 'react-native';
import {OrderScreen} from '../../../modules';
import images from '../../../assets/images';
import styles from './styles';
import {StackNavigator} from '../../stack-navigator';
import {Routes} from '../../../constants';

const TabNavigator = ({route}) => {
  const tabBarIconHome = ({navigation}) => {
    if (navigation.isFocused()) {
      return (
        <Image
          tintColor={colors.button}
          source={images['homeFocused']}
          style={styles.image}
        />
      );
    }
    return <Image source={images.home} style={styles.image} />;
  };

  const tabBarIconOrder = ({navigation}) => {
    if (navigation.isFocused()) {
      return (
        <Image
          tintColor={colors.button}
          source={images['boxFocused']}
          style={styles.image}
        />
      );
    }
    return <Image source={images.box} style={styles.image} />;
  };

  const drawerIcon = ({navigation}) => <DrawerIcon {...navigation} />;

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        headerTitleStyle: {fontSize: moderateScale(16)},
        tabBarLabelStyle: {fontSize: moderateScale(12)},
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.button,
        tabBarActiveBackgroundColor: colors.darkGreen,
        headerStyle: {backgroundColor: colors.darkGreen},
        headerLeft: () => drawerIcon({navigation}),
      })}>
      <Tab.Screen
        initialParams={{route}}
        options={({navigation}) => ({
          headerShown: false,
          title: Routes.home,
          tabBarIcon: () => tabBarIconHome({navigation}),
        })}
        component={StackNavigator}
        name={Routes.stack}
      />
      <Tab.Screen
        options={({navigation}) => ({
          lazy: false,
          tabBarIcon: () => tabBarIconOrder({navigation}),
        })}
        initialParams={route.params}
        component={OrderScreen}
        name={Routes.order}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
