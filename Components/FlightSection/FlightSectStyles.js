import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const FlightSectStyles = ScaledSheet.create({
    textFlight: {
        marginLeft: '5%',
        fontSize: 16,
        color:'#191919',
        fontFamily: 'Inter-Bold'
    },
    viewTravel: {
        width: '90%',
        marginTop: verticalScale(14),
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 8
    },
    viewUpTravel: {
        paddingTop: verticalScale(12),
        paddingHorizontal: scale(12),
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textRight: {
        alignSelf: 'flex-start'
    },
    textUpper: {
        fontSize: 20,
        color: '#1262AE',
        fontFamily: 'Inter-Bold'
    },
    textUpperScnd: {
        fontSize: 20,
        color: '#1262AE',
        fontFamily: 'Inter-Bold',
        alignSelf: 'flex-end'
    },
    textLower: {
        fontSize: 14,
        color: '#191919',
        fontFamily: 'Inter'
    },
    ViewAirPlan: {
        height: '50',
        width: scale(145),
        alignSelf: 'center'
    },
    airPlan: {
        height: verticalScale(41),
        width: '100%',
        resizeMode: 'stretch'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#7E8B97', 
        opacity: 0.1,
        marginTop: verticalScale(12),
        marginBottom: verticalScale(12),
    },
    viewDownTravel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: verticalScale(12),
        paddingBottom: verticalScale(12),
    },
    dateDepart: {
        color: '#7E8B97',
        fontSize:  15,
        fontFamily: 'Roboto-Regular'
    },
    remainingDays: {
        color: '#7E8B97',
        fontSize:  15,
        fontFamily: 'Inter'
    },
    boldText: {
        fontFamily: 'Inter-Bold'
    },
});
