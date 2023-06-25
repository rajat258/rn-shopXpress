import {StyleSheet} from 'react-native';
import {colors, moderateScale, verticalScale} from '../../../theme';

const categoryItemStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: verticalScale(200),
    margin: moderateScale(6),
    marginVertical: verticalScale(15),
  },
  imageContainer: {
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
    width: '100%',
    height: verticalScale(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    borderBottomLeftRadius: moderateScale(5),
    borderBottomRightRadius: moderateScale(5),
    backgroundColor: colors.lightGreen200,
    paddingVertical: verticalScale(5),
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
  },
  categoryName: {
    color: colors.black,
    fontSize: moderateScale(22),
    fontWeight: '300',
  },
});

export default categoryItemStyle;
