import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TopNavBarStyles } from './TopNavBarStyles';

const TopNavBar = ({ navigation }) => {
    const text = "FickleFlight";
    const restOfText = text.slice(0, -1); 
    const lastLetter = text.slice(-1); 
    return (
        <View style={TopNavBarStyles.nav}>
            <TouchableOpacity>
                <FontAwesome name="bars" size={24} color="black"  style={TopNavBarStyles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={TopNavBarStyles.container}>
                <Text style={TopNavBarStyles.text}>{restOfText}</Text>
                <View style={TopNavBarStyles.lastLetterContainer}>
                    <Text style={TopNavBarStyles.lastLetter}>{lastLetter}</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={TopNavBarStyles.img} source={require('../../assets/ballon.jpg')} />
            </TouchableOpacity>
        </View>
    );
}

export default TopNavBar;