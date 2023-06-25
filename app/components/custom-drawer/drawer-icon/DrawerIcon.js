import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './drawerIconStyle';
import images from '../../../assets/images';

// Menu Icon used to open/close Drawer.
const DrawerIcon = navigation => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.toggleDrawer()}>
      <Image source={images.menu} style={styles.image} />
    </TouchableOpacity>
  );
};

export default DrawerIcon;
