import {StyleSheet} from 'react-native';
import {colors, moderateScale, verticalScale} from '../../../theme';

const cartScreenStyle = actionLoad =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listEmptyComponent: {
      marginTop: verticalScale(250),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.black,
      fontSize: moderateScale(24),
      fontWeight: '700',
    },
    checkoutText: {
      color: colors.white,
      fontSize: moderateScale(16),
      fontWeight: '500',
    },
    checkoutButton: {
      marginTop: verticalScale(10),
      opacity: actionLoad ? 0.5 : 1,
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: moderateScale(10),
      backgroundColor: colors.button,
      width: '50%',
      paddingVertical: verticalScale(10),
    },
    shoppingButton: {
      marginTop: verticalScale(5),
      paddingVertical: verticalScale(10),
      width: '40%',
      borderRadius: moderateScale(10),
      alignSelf: 'center',
      backgroundColor: colors.darkGreen,
    },
    shoppingButtonText: {
      color: colors.black,
      textAlign: 'center',
      fontSize: moderateScale(20),
      fontWeight: '600',
    },
  });

export default cartScreenStyle;
