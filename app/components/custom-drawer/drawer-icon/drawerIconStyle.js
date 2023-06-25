import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale} from '../../../theme';

const drawerIconStyle = StyleSheet.create({
  container: {
    marginLeft: horizontalScale(10),
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default drawerIconStyle;
