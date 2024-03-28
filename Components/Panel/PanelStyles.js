import { StyleSheet } from 'react-native';

export const PanelStyles = StyleSheet.create({
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginLeft: '5%',
        paddingTop: '3%'
    },
    lineSpace: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 15,
    },
    textPanel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#191919',
        alignSelf: 'center',
        fontFamily: 'Roboto-Regular'
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '4%', 
    },
});
