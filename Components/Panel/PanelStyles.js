import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';


export const PanelStyles = ScaledSheet.create({
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginLeft: scale(16),
        paddingTop: verticalScale(16)
    },
    lineSpace: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: moderateScale(10)
    },
    textPanel: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color: '#191919',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular'
    },
    icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(14), 
    },
    helpArea: {
        width: '95%',
        height: 44,
        backgroundColor:'#e3f2fd',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#669bbc",
        padding: 10
    },
    textArea: {
        color: "#1262AE",
        fontSize: 14,
        marginLeft: 5,
        fontFamily: 'Inter'
    },
});
