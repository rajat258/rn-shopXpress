import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Image} from 'react-native';
import images from '../../assets/images';
import {CustomDrawer} from '../../components';
import {colors, moderateScale} from '../../theme';
import {TabNavigator} from '../bottom-tab-navigator';
import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerContent = ({props}) => <CustomDrawer {...props} />;

  const drawerIconHouse = () => (
    <Image tintColor={colors.white} source={images.home} style={styles.image} />
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerTitleStyle: {fontSize: moderateScale(16)},
        drawerLabelStyle: {fontSize: moderateScale(16)},
        drawerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.white,
        drawerActiveTintColor: colors.white,
        drawerActiveBackgroundColor: colors.darkGreen,
      }}
      drawerContent={props => drawerContent({props})}>
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerIcon: drawerIconHouse,
          headerShown: false,
        }}
        component={TabNavigator}
        name="TabNavigator"
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
