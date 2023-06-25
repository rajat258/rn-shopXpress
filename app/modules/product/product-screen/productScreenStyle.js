import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../../theme';

const productScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listEmptyComponent: {
    color: colors.black,
    fontSize: moderateScale(20),
  },
});

export default productScreenStyle;
