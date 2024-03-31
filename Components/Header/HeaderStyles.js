import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const HeaderStyles = ScaledSheet.create({
    cover: {
        height: verticalScale(145),
        width: '100%',
    },
    icon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: verticalScale(34), 
        width: '100%'
    },
});
