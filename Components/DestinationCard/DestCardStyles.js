import { StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

const { width } = Dimensions.get('window');

export const DestCardStyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginLeft: horizontalScale(15),
        borderRadius: moderateScale(10),
        width: width / 2.4,
        padding: moderateScale(10),
        height: '100%',
    },
    image: {
        width: '100%',
        height: '70%',
    },
    textCardFlex: {
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    destination: {
        marginTop: verticalScale(-1),
        fontWeight: 'bold',
    },
    country: {
        textAlign: 'center',
        color: 'gray',
    },
    code: {
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
        width : 45,
        borderRadius: moderateScale(2)
    },
});