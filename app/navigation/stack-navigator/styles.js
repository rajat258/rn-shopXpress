import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  button: {
    marginRight: '10%',
    paddingVertical: '5%',
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  badgeContainer: {
    paddingHorizontal: moderateScale(2),
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 1000,
    right: horizontalScale(-5),
    top: verticalScale(1),
  },
  badgeText: {
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
});

export default styles;
