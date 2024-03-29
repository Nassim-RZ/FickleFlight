import { StyleSheet,} from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet  } from 'react-native-size-matters';


export const TopNavBarStyles = ScaledSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "white",
        height: verticalScale(60),
        width: '100%',
        marginTop: verticalScale(15),
        padding: verticalScale(16)
    },
    img: {
        height:  36,
        width:  36,
    },
    icon: {
        height: 32,
        width: 32,
    },
});