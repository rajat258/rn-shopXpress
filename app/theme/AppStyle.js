import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';
import {moderateScale, verticalScale} from './Metrics';

const AppStyle = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    marginVertical: '50%',
    marginHorizontal: '50%',
    zIndex: 1,
    color: colors.black,
  },
  imageButton: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  flex: {
    flex: 1,
  },
  listEmptyComponent: {
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyComponentText: {
    color: colors.black,
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default AppStyle;
