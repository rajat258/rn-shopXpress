import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../theme';

const signupScreenStyle = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  innerBoxContainer: {
    position: 'absolute',
    top: '30%',
    height: '40%',
    left: '5%',
    right: '5%',
    bottom: '30%',
    width: '90%',
    backgroundColor: colors.white100,
    borderRadius: moderateScale(10),
  },
  loginButton: {
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(10),
    width: '80%',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    backgroundColor: colors.darkGreen,
  },
  loginButtonText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  innerContainer: {
    flex: 1,
  },
  scrollViewAlign: {
    height: '100%',
    width: '100%',
  },
  errorText: {
    marginLeft: '10%',
    position: 'relative',
    color: 'red',
    fontSize: moderateScale(14),
  },
  formikTextInput: {
    alignSelf: 'center',
    marginVertical: '1%',
    paddingVertical: '2%',
    width: '80%',
    borderBottomWidth: moderateScale(1),
    fontSize: moderateScale(18),
    color: colors.black,
    borderColor: colors.grey,
  },
  noAccountContainer: {
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '5%',
    flexDirection: 'row',
  },
  noAccountText: {
    color: colors.black,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  signupButton: {
    marginLeft: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: colors.green,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  loader: {
    width: moderateScale(150),
    height: moderateScale(200),
    position: 'absolute',
    top: verticalScale(350),
    left: horizontalScale(120),
  },
});

export default signupScreenStyle;
