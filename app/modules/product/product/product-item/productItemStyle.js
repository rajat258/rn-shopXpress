import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const productItemStyle = actionLoad =>
  StyleSheet.create({
    container: {
      opacity: actionLoad ? 0.5 : 1,
      width: '46%',
      margin: moderateScale(5),
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: moderateScale(10),
    },
    ratingLikeContainer: {
      flexDirection: 'row',
      marginBottom: verticalScale(10),
    },
    ratingContainer: {
      marginLeft: horizontalScale(10),
      alignItems: 'center',
      paddingHorizontal: horizontalScale(10),
      paddingBottom: verticalScale(5),
      borderBottomEndRadius: 5,
      borderBottomStartRadius: 5,
      backgroundColor: colors.lightGreen,
    },
    ratingText: {
      textAlign: 'center',
      fontSize: moderateScale(12),
      color: colors.black,
    },
    likeButton: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'flex-end',
      marginRight: horizontalScale(10),
    },
    likeImage: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
    productImage: {
      marginTop: verticalScale(10),
      width: moderateScale(150),
      height: moderateScale(150),
    },
    titleContainer: {
      marginVertical: verticalScale(10),
    },
    title: {
      color: colors.black,
      fontSize: moderateScale(16),
      fontWeight: '600',
    },
  });

export default productItemStyle;
