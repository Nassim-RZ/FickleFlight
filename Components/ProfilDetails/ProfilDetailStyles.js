import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const DetailStyles = ScaledSheet.create({
    profileDetails: {
        flexDirection: 'column',
    },
    nameParticular: {
        marginLeft: scale(16),
        marginTop: verticalScale(40),
    },
    name: {
        fontSize: 24,
        color: '#191919',
        fontFamily: 'Inter-Bold'
    },
    localization: {
        color: '#7E8B97',
        fontSize: 14,
        fontFamily: 'Inter'
    },
    bio: {
        marginTop: 10,
        marginHorizontal: scale(16),
        fontSize: 14,
        color: '#191919',
        fontFamily: 'Inter'
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: '#7E8B97', 
        marginHorizontal: scale(16), 
        marginTop: 12,
        opacity: 0.1
    },
});
