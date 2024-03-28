import { StyleSheet} from 'react-native';

export const SeeAllStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        flexDirection: 'column',
        marginTop: '5%',
    },
    viewList: {
        marginTop: '10%',
        width: '100%',
    },
    coverIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: '2%',
        top: 20,
       alignItems: 'center',
       backgroundColor: '#7E8B97',
       width: '100%'
    },
    textFlight: {
        marginHorizontal: '5%',
        fontSize: 22,
        color:'#191919',
        fontFamily: 'Inter-Bold',
    },
});