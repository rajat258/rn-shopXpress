import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../../../theme';

const purchasedItemStyle = StyleSheet.create({
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
    width: '70%',
    marginVertical: '2%',
    borderBottomWidth: moderateScale(1),
  },
  totalAmountText: {
    color: colors.black,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});

export default purchasedItemStyle;
