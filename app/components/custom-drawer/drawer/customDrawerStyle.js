import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const customDrawerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  customItem: {
    width: '100%',
    backgroundColor: colors.darkGreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: horizontalScale(10),
  },

  informationContainer: {
    marginLeft: horizontalScale(5),
    paddingVertical: verticalScale(8),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(24),
    color: colors.white,
  },
  textEmail: {
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: colors.white,
    marginBottom: verticalScale(5),
  },
  logoutContainer: {
    width: '50%',
    backgroundColor: colors.lightGreen,
    alignSelf: 'center',
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(20),
  },
  logoutText: {
    fontSize: moderateScale(16),
    color: colors.black,
    fontWeight: '500',
  },
  image: {
    height: moderateScale(28),
    width: moderateScale(28),
  },
  logoutImage: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
});

export default customDrawerStyle;
