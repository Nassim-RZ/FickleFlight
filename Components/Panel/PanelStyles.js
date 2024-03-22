import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

export const PanelStyles = StyleSheet.create({
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: verticalScale(30),
        marginLeft: horizontalScale(19)
    },
    lineSpace: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: horizontalScale(10),
    },
    textPanel: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: horizontalScale(16),
        alignSelf: 'center'
    },
    iconCircle: {
        width: verticalScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(10),
        backgroundColor: '#e3f2fd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: horizontalScale(10), 
    },
});
