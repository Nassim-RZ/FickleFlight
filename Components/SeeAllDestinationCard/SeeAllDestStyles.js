import { StyleSheet } from 'react-native';

export const SeeAllDestStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: '5%',
        marginBottom: 10,
        borderRadius: 10,
        width: '90%',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 180,
    },
    textCardFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    destination: {
        marginTop: -1,
        color: '#191919',
        fontFamily: 'Inter-Bold',
        fontSize: 20,
    },
    country: {
        color: '#7E8B97',
        fontSize: 18,
        fontFamily: 'Inter'
    },
    code: {
        backgroundColor: '#F8F9FB',
        textAlign: 'center',
        borderRadius: 2,
        fontSize: 18,
        fontFamily: 'Inter'
    },
});