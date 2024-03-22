import { StyleSheet } from 'react-native';
import { verticalScale } from '../../Utils/Responsive';

export const BottomNavBarStyles = StyleSheet.create({
    navBottom: {
        backgroundColor: "white",
        height: verticalScale(70),
        width: '100%',
        marginTop: verticalScale(38),
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
        fontSize: 12,
        color: '#7FB3D5',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
    },
});