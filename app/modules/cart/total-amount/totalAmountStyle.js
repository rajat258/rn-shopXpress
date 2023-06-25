import {StyleSheet} from 'react-native';
import {colors, moderateScale, verticalScale} from '../../../theme';

const totalAmountStyle = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    backgroundColor: colors.lightGreen100,
  },
  text: {
    color: colors.black,
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginVertical: verticalScale(7),
  },
});

export default totalAmountStyle;
