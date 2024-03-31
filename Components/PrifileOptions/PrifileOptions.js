import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ProfileOptStyles } from "./ProfileOptStyles"; 

const PrifileOptions = () => {
  return (
    <View style={ProfileOptStyles.panel}>
        <TouchableOpacity style={ProfileOptStyles.lineSpace}>
            <View style={ProfileOptStyles.icon}>
                <Image source={require('../../assets/Rate.png')} />
            </View>
            <Text style={ProfileOptStyles.textPanel}>Payment Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ProfileOptStyles.lineSpace}>
            <View style={ProfileOptStyles.icon}>
            <Image source={require('../../assets/Rate1.png')} />
            </View>
            <Text style={ProfileOptStyles.textPanel}>Covid Advisory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ProfileOptStyles.lineSpace}>
            <View style={ProfileOptStyles.icon}>
            <Image source={require('../../assets/Rate2.png')} />
            </View>
            <Text style={ProfileOptStyles.textPanel}>Referral Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ProfileOptStyles.lineSpace}>
            <View style={ProfileOptStyles.icon}>
            <Image source={require('../../assets/Rate3.png')} />
            </View>
            <Text style={ProfileOptStyles.textPanel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ProfileOptStyles.lineSpace}>
            <View style={ProfileOptStyles.icon}>
            <Image source={require('../../assets/Rate4.png')} />
            </View>
            <Text style={ProfileOptStyles.textPanel}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={ProfileOptStyles.helpArea}>
                <Image source={require('../../assets/ion_help-circle-outline.png')} />
                <Text style={ProfileOptStyles.textArea}>Have questions? We are here to help</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default PrifileOptions;
