import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const TrendingDestStyles = ScaledSheet.create({
    trendLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginTop: 25,
        marginBottom: 14,
        marginLeft: 5
    },
    textTrend: {
        fontSize: 16,
        color:'#191919',
        fontFamily: 'Inter-Bold',
    },
    textSeeAll: {
        color: '#1262AE',
        fontSize: 14,
        fontFamily: 'Inter'
    },
    viewList: {
        justifyContent: 'space-between',
        marginLeft: '5%',
    },
    textFlight: {
        marginLeft: '5%',
        fontSize: 16,
        color:'#191919',
        fontFamily: 'Inter-Bold'
    },
});
