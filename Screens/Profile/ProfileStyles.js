import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const ProfileStyles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cover: {
        marginTop: verticalScale(15),
        height: verticalScale(145),
        width: '100%',
    },
    coverIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: verticalScale(34), 
        width: '100%'
    },
    globalWhiteView: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: '-2%',
        flexDirection: 'column',
    },
    profileImage: { 
        position: 'absolute',
        top: -50, 
        alignSelf: 'flex-start', 
        width:verticalScale(84),
        height: verticalScale(84),
        left: scale(12),
        borderWidth: 3
    },
    name: {
        marginTop: verticalScale(40),
        marginLeft: scale(16),
        fontSize: moderateScale(24),
        color: '#191919',
        fontFamily: 'Inter-Bold'
    },
    localization: {
        marginLeft: scale(16),
        color: '#7E8B97',
        fontSize: moderateScale(14),
        fontFamily: 'Inter'
    },
    bio: {
        marginTop: verticalScale(15),
        marginHorizontal: scale(16),
        fontSize: moderateScale(14),
        color: '#191919',
        fontFamily: 'Inter'
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: '#7E8B97', 
        marginHorizontal: scale(16), 
        marginTop: verticalScale(12),
        opacity: 0.1
    },
    bottom: {
        bottom: 0,
    }
});
