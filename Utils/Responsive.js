import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;
const guidelineBaseWidth = 386.42;
const guidelineBaseHeight = 836.72;

const horizontalScale = (size) =>
Math.ceil((screenWidth / guidelineBaseWidth) * size);

const verticalScale = (size) =>
Math.ceil((screenHeight / guidelineBaseHeight) * size);

const moderateScale = (size, factor = 0.51) =>
Math.ceil(size + (horizontalScale(size) - size) * factor);

export { guidelineBaseWidth, horizontalScale, moderateScale, verticalScale };