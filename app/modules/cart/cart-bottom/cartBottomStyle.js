import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const cartBottomStyle = actionLoad =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: verticalScale(5),
    },
    plusMinus: {
      flex: 1,
      marginLeft: horizontalScale(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    plusMinusButton: {
      opacity: actionLoad ? 0.5 : 1,
      paddingHorizontal: moderateScale(4),
      alignItems: 'center',
      borderWidth: moderateScale(1),
      borderColor: colors.black,
      borderRadius: moderateScale(100),
    },
    plusMinusText: {
      color: colors.black,
    },
    totalItemContainer: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(5),
      borderRadius: moderateScale(5),
    },
    totalItem: {
      color: colors.black,
      fontSize: moderateScale(14),
    },
    deleteButton: {
      opacity: actionLoad ? 0.5 : 1,
      marginRight: horizontalScale(10),
      justifyContent: 'center',
    },
    deleteImage: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
  });

export default cartBottomStyle;
