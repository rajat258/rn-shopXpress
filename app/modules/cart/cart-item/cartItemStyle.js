import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../../theme';

const cartItemStyle = StyleSheet.create({
  container: {
    width: '46%',
    backgroundColor: colors.white,
    margin: moderateScale(6),
    borderRadius: moderateScale(10),
  },
  productImage: {
    alignSelf: 'center',
    width: moderateScale(150),
    height: moderateScale(150),
  },
  price: {
    marginLeft: '2%',
    fontWeight: '800',
    color: colors.button,
    fontSize: moderateScale(14),
  },
  productName: {
    color: colors.black,
    textAlign: 'center',
    marginTop: '2%',
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
});

export default cartItemStyle;
