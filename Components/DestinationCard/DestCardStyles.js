import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

export const DestCardStyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
    },
    image: {
    },
    textCardFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    destination: {
        color: '#191919',
        fontFamily: 'Inter-Bold',
        fontSize: 14, 
    },
    country: {
        textAlign: 'center',
        color: '#7E8B97',
        fontSize: 12,
        fontFamily: 'Inter',
    },
    code: {
        backgroundColor: '#F8F9FB',
        textAlign: 'center',
        width : 45,
        borderRadius: 2,
        fontSize: 12,
        fontFamily: 'Inter'
    },
});