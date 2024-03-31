import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const ParisCardStyles = ScaledSheet.create({
    viewImgParis: {
        height: verticalScale(180),
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    imgParis: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'stretch'
    },    
    heart: {
        position: 'absolute',
        top: '20%',
        right: '13%',
    },
    textParis: {
        position: 'absolute',
        bottom: '25%',
        left: '13%',
        fontSize: 28,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
    textFrom: {
        position: 'absolute',
        bottom: '55%',
        right: '13%',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Inter',
    },
    textPrice: {
        position: 'absolute',
        bottom: '23%',
        right: '13%',
        fontSize: 32,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
});
