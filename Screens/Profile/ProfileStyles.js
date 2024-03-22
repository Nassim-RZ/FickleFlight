import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../Utils/Responsive';

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    globalWhiteView: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        top: verticalScale(220),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    name: {
        marginTop: verticalScale(45),
        marginLeft: horizontalScale(19),
        fontSize: moderateScale(24),
        fontWeight: 'bold',
    },
    localization: {
        marginLeft: horizontalScale(19),
        color: 'gray',
    },
    bio: {
        marginTop: verticalScale(10),
        marginLeft: horizontalScale(19),
    },
    separator: {
        height: verticalScale(1),
        width: '90%',
        backgroundColor: 'gray', 
        marginHorizontal: horizontalScale(20), 
        marginTop: verticalScale(13),
        opacity: 0.1
    },
    helpArea: {
        width: horizontalScale(345),
        height: verticalScale(30),
        backgroundColor:'#e3f2fd',
        borderRadius: moderateScale(6),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(20),
        marginVertical:verticalScale(15),
        color: "#669bbc",
    },
    textArea: {
        color: "#688bbc",
        marginLeft: horizontalScale(5),
    },
});
