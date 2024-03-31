import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BottomNavBarStyles } from './BottomNavBarStyles';

const BottomNavBar = ({ imageSource, activeTab, navigation }) => {
    return (
        <View style={BottomNavBarStyles.navBottom}>
            <View style={BottomNavBarStyles.navItemBottom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')} style={BottomNavBarStyles.button}>
                        <Image source={imageSource[0]} style={BottomNavBarStyles.icon}/>
                        <Text style={[BottomNavBarStyles.text, activeTab === 'Explore' ? { color: '#10579B' } : { color: '#7E8B97' }]}>Explore</Text>
                    </TouchableOpacity>
                </View>
                <View style={BottomNavBarStyles.navItemBottom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={BottomNavBarStyles.button}>
                        <Image source={imageSource[1]} style={BottomNavBarStyles.icon}/>
                        <Text style={[BottomNavBarStyles.text, activeTab === 'Profile' ? { color: '#10579B' } : { color: '#7E8B97' }]}>Profile</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

export default BottomNavBar;