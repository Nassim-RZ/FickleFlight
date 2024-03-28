import { StyleSheet } from 'react-native';

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cover: {
        marginTop: '5%',
        height: '20%',
        width: '100%',
    },
    coverIcon: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '5%', 
        width: '100%'
    },
    globalWhiteView: {
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
        width: 100,
        height: 100,
        borderRadius: 50,
        left: '4%',
        borderColor: 'white',
        borderWidth: 3
    },
    name: {
        marginTop: 50,
        marginLeft: '5%',
        fontSize: 24,
        color: '#191919',
        fontFamily: 'Inter-Bold'
    },
    localization: {
        marginLeft: '5%',
        color: '#7E8B97',
        fontSize: 14,
        fontFamily: 'Inter'
    },
    bio: {
        marginTop: 15,
        marginLeft: '5%',
        fontSize: 14,
        color: '#191919',
        fontFamily: 'Inter'
    },
    separator: {
        height: 1,
        width: '90%',
        backgroundColor: '#7E8B97', 
        marginHorizontal: '5%', 
        marginTop: '4%',
        opacity: 0.1
    },
    helpArea: {
        width: '90%',
        height: 44,
        backgroundColor:'#e3f2fd',
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '5%',
        color: "#669bbc",
    },
    textArea: {
        color: "#1262AE",
        fontSize: 14,
        marginLeft: 5,
        fontFamily: 'Inter'
    },
    bottom: {
        position: 'bottom'
    }
});
