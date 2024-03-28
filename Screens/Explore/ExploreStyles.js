import { StyleSheet } from 'react-native';

export const ExploreStyles = StyleSheet.create({
    container: {
        flex: 1,
        aligneitems: 'center',
        backgroundColor: "#f8f9fa",
    },  
    viewImgParis: {
        height: '21%',
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '5%',
        borderRadius: 10,
    },
    imgParis: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    textParis: {
        position: 'absolute',
        bottom: '16%',
        left: '5%',
        fontSize: 28,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
    heart: {
        position: 'absolute',
        top: '10%',
        right: '5%',
    },
    textFrom: {
        position: 'absolute',
        bottom: '45%',
        right: '5%',
        fontSize: 14,
        color: 'white',
        fontFamily: 'Inter',
    },
    textPrice: {
        position: 'absolute',
        bottom: '16%',
        right: '5%',
        fontSize: 32,
        color: 'white',
        fontFamily: 'BalooBhai2-Bold'
    },
    textFlight: {
        marginLeft: '5%',
        fontSize: 16,
        color:'#191919',
        fontFamily: 'Inter-Bold'
    },
    viewFlight: {
        backgroundColor: 'white',
        height: '12%',
        width: '90%',
        marginTop: '5%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    abrevStartingPoint: {
        marginLeft: '10%',
        fontSize: 20,
        alignSelf: "flex-start",
        color: '#1262AE',
        fontFamily: 'Inter-Bold'
    },
    startingPoint: {
        marginLeft: '10%',
        alignSelf: "flex-start",
        fontSize: 14,
        color: '#191919',
        fontFamily: 'Inter'
    },
    abrevEndingPoint: {
        marginRight: '10%',
        fontSize: 20,
        alignSelf: "flex-end",
        color: '#1262AE',
        fontFamily: 'Inter-Bold'
    },
    endingPoint: {
        marginRight: '10%',
        alignSelf: "flex-end",
        fontSize: 14,
        color: '#191919',
        fontFamily: 'Inter'
    },
    viewAirPlan: {
        height: '50%',
        width: '40%',
        alignSelf: 'center'
    },
    airPlan: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    separator: {
        height: 2,
        width: '90%',
        backgroundColor: '#7E8B97', 
        alignSelf: 'center',
        opacity: 0.1
    },
    scndViewFlight: {
        backgroundColor: 'white',
        height: '6%',
        width: '90%',
        marginBottom: '8%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    dateDepart: {
        color: '#7E8B97',
        marginLeft: '4%',
        fontSize:  15,
        fontFamily: 'Roboto-Regular'
    },
    remainingDays: {
        color: '#7E8B97',
        marginRight: '4%',
        fontSize:  15,
        fontFamily: 'Inter'
    },
    boldText: {
        fontFamily: 'Inter-Bold'
    },
    textSeeAll: {
        color: '#1262AE',
        marginRight: '5%',
        fontSize: 14,
        fontFamily: 'Inter'
    },
    spaceTrendText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5%',
    },
    viewList: {
        height: '20%',
        justifyContent: 'space-around',
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
});