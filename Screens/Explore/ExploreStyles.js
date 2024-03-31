import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';
export const ExploreStyles = ScaledSheet.create({
    container: {
        flex: 1,
        aligneitems: 'center',
        backgroundColor: "#f8f9fa",
    },  
    boldText: {
        fontFamily: 'Inter-Bold'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});