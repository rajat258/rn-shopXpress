import {Image, SafeAreaView, Text} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import logoStyle from './logoStyle';
import {colors} from '../../theme';
import {Strings} from '../../constants';

const Logo = ({size = 300}) => {
  const styles = logoStyle(size);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.companyName}>{Strings.companyName}</Text>
      <Image
        tintColor={colors.black}
        resizeMode="contain"
        style={styles.image}
        source={images.logo}
      />
    </SafeAreaView>
  );
};

export default Logo;
