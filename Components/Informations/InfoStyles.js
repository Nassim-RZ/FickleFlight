import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

export const InfoStyles = StyleSheet.create({
    cover: {
        top: verticalScale(30),
        height: verticalScale(200),
        width: '100%',
        position: 'absolute', 
    },
    coverIcon: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: horizontalScale(330),
        height: horizontalScale(330),
        marginHorizontal: verticalScale(30),
        marginVertical: verticalScale(45),
        top: verticalScale(16),
        position: 'absolute', 
    },
    icon: {
        width: horizontalScale(40), 
        height: horizontalScale(40), 
        borderRadius: moderateScale(20), 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profileImage: {
        position: 'absolute', 
        top: verticalScale(170), 
        alignSelf: 'flex-start', 
        width: verticalScale(100),
        height: verticalScale(100),
        borderRadius: 50,
        zIndex: 1,
        left: horizontalScale(20),
        borderColor: 'white',
        borderWidth: 3
    },
});
