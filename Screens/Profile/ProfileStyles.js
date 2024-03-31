import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    profileBody: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: '-2%',
    },    
    profileImage: { 
        position: 'absolute',
        top: -50, 
        alignSelf: 'flex-start', 
        left: 12,
        borderWidth: 3
    },
    bottom: {
        bottom: 0,
    }
});
