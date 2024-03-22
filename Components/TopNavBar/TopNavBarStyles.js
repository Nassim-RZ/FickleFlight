import { StyleSheet,} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

export const TopNavBarStyles = StyleSheet.create({
    nav: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "white",
        height: verticalScale(70),
        width: '100%',
        marginTop: verticalScale(30),
    },
    text: {
        fontSize: moderateScale(28),
        fontWeight: 'bold',
        color: '#1565c0',
    },
    lastLetterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        transform: [{ rotate: '-15deg' }],
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastLetter: {
        position: 'absolute', 
        left: '100%', 
        fontSize:  moderateScale(30),
        fontWeight: 'bold',
        color: '#1565c0',
    },
    img: {
        height:  verticalScale(38),
        width:  verticalScale(38),
        borderRadius: 20,
        marginRight: horizontalScale(10)
    },
    icon: {
        marginLeft: horizontalScale(10)
    },
});