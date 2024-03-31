import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';


export const ProfileOptStyles = ScaledSheet.create({
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingTop: 16,
        marginLeft: scale(16),
    },
    lineSpace: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: 20
    },
    textPanel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#191919',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular',
        marginLeft: scale(14),
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpArea: {
        width: '95%',
        backgroundColor:'#e3f2fd',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#669bbc",
        padding: 10,
    },
    textArea: {
        color: "#1262AE",
        fontSize: 14,
        marginLeft: 5,
        fontFamily: 'Inter'
    },
});
