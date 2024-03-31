import { StyleSheet } from 'react-native';

export const BottomNavBarStyles = StyleSheet.create({
    navBottom: {
        backgroundColor: "white",
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    navItemBottom: {
        paddingVertical: 16
    },
    text: {
        fontSize: 13,
        color: '#10579B',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        //paddingTop: 14
        paddingTop: 8
    },
    button: {
        alignItems: 'center',
    },
});