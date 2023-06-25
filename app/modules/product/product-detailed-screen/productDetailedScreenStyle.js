import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const productDetailedScreenStyle = actionLoad =>
  StyleSheet.create({
    scrollView: {
      paddingTop: verticalScale(10),
      backgroundColor: colors.background,
      flex: 1,
    },
    image: {
      alignSelf: 'center',
      height: moderateScale(200),
      width: moderateScale(200),
    },
    productName: {
      fontSize: moderateScale(22),
      fontWeight: '700',
      color: colors.black,
      marginVertical: verticalScale(10),
      marginHorizontal: horizontalScale(20),
    },
    header: {
      fontSize: moderateScale(18),
      fontWeight: '600',
      color: colors.black,
      marginTop: verticalScale(10),
      marginHorizontal: horizontalScale(20),
    },
    details: {
      color: colors.black,
      textAlign: 'justify',
      fontSize: moderateScale(16),
      fontWeight: '400',
      marginHorizontal: horizontalScale(20),
    },
    flexRow: {
      flexDirection: 'row',
    },
    addToCart: {
      opacity: actionLoad ? 0.5 : 1,
      marginLeft: horizontalScale(20),
      width: '40%',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(20),
      backgroundColor: colors.button,
      padding: moderateScale(10),
      paddingHorizontal: verticalScale(20),
      borderRadius: moderateScale(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonImage: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
    addToCartText: {
      color: colors.black,
      fontSize: moderateScale(18),
    },
    buttonText: {
      marginLeft: horizontalScale(5),
      color: colors.white,
      fontSize: moderateScale(14),
      fontWeight: '600',
    },
    activityIndicator: {
      position: 'absolute',
      marginTop: '50%',
      marginBottom: '50%',
      marginRight: '50%',
      marginLeft: '50%',
    },
  });

export default productDetailedScreenStyle;
