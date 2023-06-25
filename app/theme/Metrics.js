import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

let guidelineBaseWidth = 375;
let guidelineBaseHeight = 812;

if (width > height) {
  [guidelineBaseWidth, guidelineBaseHeight] = [
    guidelineBaseHeight,
    guidelineBaseWidth,
  ];
}

const horizontalScale = size => (width / guidelineBaseWidth) * size;

const verticalScale = size => (height / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const globalMetrics = {
  isAndroid: Platform.OS === 'android',
  isIos: Platform.OS === 'ios',
};

export {
  globalMetrics,
  horizontalScale,
  verticalScale,
  moderateScale,
  height,
  width,
};
