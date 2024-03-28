import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { TopNavBarStyles } from './TopNavBarStyles';

const TopNavBar = ({ navigation }) => {
    return (
        <View style={TopNavBarStyles.nav}>
            <TouchableOpacity>
                <Image style={TopNavBarStyles.icon} source={require('../../assets/hamburger-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
            <View>
                <Image source={require('../../assets/Combined-Shape.png')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={TopNavBarStyles.img} source={require('../../assets/Profile.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default TopNavBar;