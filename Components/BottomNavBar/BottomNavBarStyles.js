import { StyleSheet } from 'react-native';

export const BottomNavBarStyles = StyleSheet.create({
    navBottom: {
        backgroundColor: "white",
        height: 70,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    navItemBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'         
    },
    text: {
        fontSize: 13,
        color: '#10579B',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        gap: 14
    },
    icon: {
        width:20,
        height:20,
    }
});