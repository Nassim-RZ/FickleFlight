import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BottomNavBarStyles } from './BottomNavBarStyles';

const BottomNavBar = ({ navigation }) => {
    return (
        <View style={BottomNavBarStyles.navBottom}>
            <View style={BottomNavBarStyles.navItemBottom}>
                <TouchableOpacity onPress={() => navigation.navigate('Explore')} style={BottomNavBarStyles.button}>
                    <FontAwesome name="suitcase" size={30} color="#7FB3D5" />
                    <Text style={BottomNavBarStyles.text}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={BottomNavBarStyles.button}>
                    <FontAwesome name="user-o" size={30} color="#7FB3D5" />
                    <Text style={BottomNavBarStyles.text}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomNavBar;