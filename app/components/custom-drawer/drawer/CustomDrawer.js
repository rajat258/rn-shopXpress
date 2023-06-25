import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import images from '../../../assets/images';
import {Strings} from '../../../constants';
import {useLogout} from '../../../hooks';
import {colors} from '../../../theme';
import styles from './customDrawerStyle';

const CustomDrawer = props => {
  const activeUser = useSelector(state => state.activeUser?.data);
  const {logout} = useLogout();

  // render when drawer opens.
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.customItem}>
        <View style={styles.flexRow}>
          <Image
            tintColor={colors.white}
            source={images.user}
            style={styles.image}
          />
          <View style={styles.informationContainer}>
            <Text style={styles.text}>{Strings.welcome}</Text>
            <Text style={styles.textEmail}>{activeUser?.email}</Text>
          </View>
        </View>
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={logout} style={styles.logoutContainer}>
        <Image source={images.logout} style={styles.logoutImage} />
        <Text style={styles.logoutText}>{Strings.logout}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
