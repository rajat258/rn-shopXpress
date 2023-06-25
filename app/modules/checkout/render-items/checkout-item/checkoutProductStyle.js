import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../../../theme';

const checkoutProductStyle = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  name: {
    alignItems: 'flex-start',
    marginLeft: '2%',
    color: colors.black,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  price: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: '2%',
  },
  priceText: {
    color: colors.black,
    fontSize: moderateScale(14),
    fontWeight: '400',
  },
  footerComponent: {
    marginTop: '2%',
    marginLeft: '2%',
  },
  flexRow: {
    marginRight: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: colors.black,
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginTop: '2%',
  },
  numberContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: '2%',
  },
  discountedText: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '2%',
    color: colors.green,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  footerLine: {
    alignSelf: 'center',
    width: '100%',
    marginVertical: '2%',
    borderBottomWidth: moderateScale(0.6),
  },
  totalAmountText: {
    color: colors.black,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});
export default checkoutProductStyle;
