import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

export const ExploreStyles = StyleSheet.create({
    container: {
        flex: 1,
        aligneitems: 'center',
        backgroundColor: "#f8f9fa",
    },  
    viewImgParis: {
        height: verticalScale(175),
        width: horizontalScale(347),
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(20),
        borderRadius: moderateScale(10),
    },
    imgParis: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: moderateScale(10),
        resizeMode: 'stretch'
    },
    textParis: {
        position: 'absolute',
        bottom: verticalScale(25),
        left: horizontalScale(15),
        fontSize: moderateScale(23),
        fontWeight: 'bold',
        color: 'white',
    },
    heart: {
        position: 'absolute',
        top: verticalScale(15),
        right: verticalScale(14),
    },
    textFrom: {
        position: 'absolute',
        bottom: verticalScale(58),
        right: horizontalScale(15),
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: 'white',
    },
    textPrice: {
        position: 'absolute',
        bottom: verticalScale(25),
        right: horizontalScale(15),
        fontSize: moderateScale(23),
        fontWeight: 'bold',
        color: 'white',
    },
    textFlight: {
        marginLeft: horizontalScale(20),
        fontSize: moderateScale(17),
        fontWeight: 'bold',
    },
    viewFlight: {
        backgroundColor: 'white',
        height: verticalScale(100),
        width: '90%',
        marginTop: verticalScale(19),
        marginHorizontal: horizontalScale(20),
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
    },
    abrevStartingPoint: {
        marginLeft: horizontalScale(15),
        fontSize: moderateScale(26),
        alignSelf: "flex-start",
        fontWeight: 'bold',
        color: '#1565c0',
    },
    startingPoint: {
        marginLeft: horizontalScale(15),
        alignSelf: "flex-start",
        fontSize: moderateScale(16),
    },
    abrevEndingPoint: {
        marginRight: horizontalScale(15),
        fontSize: moderateScale(26),
        alignSelf: "flex-end",
        fontWeight: 'bold',
        color: '#1565c0',
    },
    endingPoint: {
        marginRight: horizontalScale(15),
        alignSelf: "flex-end",
        fontSize: moderateScale(16),
    },
    viewAirPlan: {
        height: verticalScale(64),
        width: horizontalScale(130)
    },
    airPlan: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    separator: {
        height: verticalScale(1),
        width: '90%',
        backgroundColor: 'gray', 
        alignSelf: 'center',
        opacity: 0.1
    },
    scndViewFlight: {
        backgroundColor: 'white',
        height: verticalScale(50),
        width: '90%',
        marginBottom: verticalScale(25),
        marginHorizontal: horizontalScale(20),
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: moderateScale(8),
        borderBottomRightRadius: moderateScale(8),
    },
    dateDepart: {
        color: 'gray',
        marginLeft: horizontalScale(16),
        fontSize:  moderateScale(15),
    },
    remainingDays: {
        color: 'gray',
        marginRight: horizontalScale(16),
        fontSize:  moderateScale(15),
    },
    boldText: {
        fontWeight: 'bold',
    },
    textSeeAll: {
        color: '#1565c0',
        marginRight: horizontalScale(19),
        fontSize: 18,
    },
    spaceTrendText: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(20),
    },
    viewList: {
        height: verticalScale(170),
        flex: 1,
        justifyContent: 'space-around',
    },
});