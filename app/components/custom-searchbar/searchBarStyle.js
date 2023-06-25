import {StyleSheet} from 'react-native';
import {
  colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const searchBarStyle = StyleSheet.create({
  container: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: verticalScale(40),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
  },
  searchInputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchIconContainer: {
    justifyContent: 'center',
    marginRight: horizontalScale(5),
  },
  searchIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  textInput: {
    fontSize: moderateScale(14),
    color: colors.black,
    padding: verticalScale(7),
    paddingLeft: horizontalScale(5),
  },
});

export default searchBarStyle;
