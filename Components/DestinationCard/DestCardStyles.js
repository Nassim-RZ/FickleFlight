import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const DestCardStyles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginLeft: 15,
        borderRadius: 10,
        width: width / 2.4,
        padding: 10,
        height: '100%',
    },
    image: {
        width: '100%',
        height: '70%',
    },
    textCardFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    destination: {
        marginTop: -1,
        color: '#191919',
        fontFamily: 'Inter-Bold'
    },
    country: {
        textAlign: 'center',
        color: '#7E8B97',
        fontSize: 12,
        fontFamily: 'Inter'
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