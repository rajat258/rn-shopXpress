import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const bottomBarStyle = marginTop =>
  StyleSheet.create({
    container: {
      marginTop: marginTop,
      paddingVertical: verticalScale(5),
      flexDirection: 'row',
      borderRadius: moderateScale(10),
    },
    priceContainer: {
      marginLeft: horizontalScale(10),
      alignItems: 'flex-start',
      justifyContent: 'center',
      flex: 1,
    },
    priceText: {
      fontWeight: '800',
      color: colors.button,
      fontSize: moderateScale(16),
    },
    addToCartButton: {
      marginRight: horizontalScale(10),
      paddingHorizontal: horizontalScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(10),
      backgroundColor: colors.lightGreen,
    },
    addText: {
      color: colors.black,
      fontSize: moderateScale(12),
      fontWeight: '500',
    },
  });

export default bottomBarStyle;
