import {StyleSheet} from 'react-native';
import {colors, moderateScale} from '../../../theme';

const checkoutScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  alignContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceDetailsContainer: {
    marginVertical: '2%',
    borderBottomWidth: moderateScale(0.6),
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
    marginBottom: '2%',
  },
  priceDetails: {
    color: colors.black,
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginLeft: '2%',
    marginBottom: '2%',
  },
  successfulOrder: {
    fontSize: moderateScale(24),
    textAlign: 'center',
    color: colors.black,
  },
  successfulOrderContainer: {
    backgroundColor: colors.lightGreen100,
    padding: '1%',
    paddingHorizontal: '2%',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    marginVertical: '5%',
  },
  tickImage: {
    alignSelf: 'center',
    width: moderateScale(30),
    height: moderateScale(30),
  },
  innerContainer: {
    height: 'auto',
    width: '85%',
    paddingVertical: '10%',
    paddingHorizontal: '3%',
    backgroundColor: colors.lightGreen100,
  },
  checkoutText: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  checkoutButton: {
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: '5%',
    borderRadius: moderateScale(10),
    backgroundColor: colors.button,
    width: '50%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
  },
});

export default checkoutScreenStyle;
