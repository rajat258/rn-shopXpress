import {StyleSheet} from 'react-native';
import {colors, moderateScale, verticalScale} from '../../theme';

const orderStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginTop: verticalScale(7),
    padding: moderateScale(7),
    borderRadius: moderateScale(10),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.lightGreen,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountHeader: {
    flex: 1,
    fontSize: moderateScale(22),
    color: colors.black,
    fontWeight: '600',
  },
  amount: {
    flex: 1,
    fontSize: moderateScale(18),
    color: colors.black,
    fontWeight: '300',
  },
  fulfilledColor: {
    flex: 1,
    fontSize: moderateScale(18),
    color: colors.green,
    fontWeight: '300',
  },
  noOrdersContainer: {
    flex: 1,
    marginTop: verticalScale(250),
    alignItems: 'center',
    justifyContent: 'center',
  },
  noOrdersText: {
    fontSize: moderateScale(32),
    color: colors.black,
    fontWeight: '300',
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
export default orderStyle;
