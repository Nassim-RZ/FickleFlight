import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

export const DestCardStyles = ScaledSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: scale(150),
        padding: 10,
        height: verticalScale(145),
        marginRight: verticalScale(10),
    },
    image: {
        width: '100%',
        height: '70%',
    },
    textCardFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: verticalScale(33)
    },
    destination: {
        color: '#191919',
        fontFamily: 'Inter-Bold',
        marginVertical:verticalScale(1), 
    },
    country: {
        textAlign: 'center',
        color: '#7E8B97',
        fontSize: 12,
        fontFamily: 'Inter',
        marginTop:verticalScale(1),
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