import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../theme';

const logoStyle = size =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    image: {
      width: moderateScale(size),
      height: moderateScale(size),
    },
    companyName: {
      fontSize: moderateScale(34),
      fontWeight: '600',
      color: colors.black,
    },
  });

export default logoStyle;
