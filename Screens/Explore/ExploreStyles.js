import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const ExploreStyles = ScaledSheet.create({
    container: {
        flex: 1,
        aligneitems: 'center',
        backgroundColor: "#f8f9fa",
    },  
    viewImgParis: {
        height: verticalScale(180),
        width: '100%',
        paddingVertical: verticalScale(14),
        paddingHorizontal: scale(20),
        borderRadius: 8,
    },
    imgParis: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'stretch'
    },    
    heart: {
        position: 'absolute',
        top: '20%',
        right: '13%',
    },
    textParis: {
        position: 'absolute',
        bottom: '25%',
        left: '13%',
        fontSize: 28,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
    textFrom: {
        position: 'absolute',
        bottom: '55%',
        right: '13%',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Inter',
    },
    textPrice: {
        position: 'absolute',
        bottom: '23%',
        right: '13%',
        fontSize: 32,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
    textFlight: {
        marginLeft: '5%',
        fontSize: moderateScale(16),
        color:'#191919',
        fontFamily: 'Inter-Bold'
    },
    viewTravel: {
        height: verticalScale(110),
        width: '90%',
        marginVertical: verticalScale(16),
        backgroundColor: 'white',
        marginHorizontal: '5%',
        borderRadius: 8
    },
    viewUpTravel: {
        paddingVertical: verticalScale(12),
        paddingHorizontal: scale(12),
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textRight: {
        alignSelf: 'flex-start'
    },
    textUpper: {
        fontSize: moderateScale(20),
        color: '#1262AE',
        fontFamily: 'Inter-Bold'
    },
    textUpperScnd: {
        fontSize: moderateScale(20),
        color: '#1262AE',
        fontFamily: 'Inter-Bold',
        alignSelf: 'flex-end'
    },
    textLower: {
        fontSize: moderateScale(14),
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
        marginVertical: verticalScale(12),
    },
    viewDownTravel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: verticalScale(0),
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
    trendLine: {
        height: verticalScale(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginTop: verticalScale(14),
    },
    textTrend: {
        fontSize: moderateScale(16),
        color:'#191919',
        fontFamily: 'Inter-Bold'
    },
    textSeeAll: {
        color: '#1262AE',
        fontSize: moderateScale(14),
        fontFamily: 'Inter'
    },
    viewList: {
        height: verticalScale(145),
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
        marginLeft: '5%',
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});