import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { PanelStyles } from "./PanelStyles"; 

const Panel = () => {
  return (
    <View style={PanelStyles.panel}>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <Image source={require('../../assets/Rate.png')} />
            </View>
            <Text style={PanelStyles.textPanel}>Payment Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
            <Image source={require('../../assets/Rate1.png')} />
            </View>
            <Text style={PanelStyles.textPanel}>Covid Advisory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
            <Image source={require('../../assets/Rate2.png')} />
            </View>
            <Text style={PanelStyles.textPanel}>Referral Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
            <Image source={require('../../assets/Rate3.png')} />
            </View>
            <Text style={PanelStyles.textPanel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
            <Image source={require('../../assets/Rate4.png')} />
            </View>
            <Text style={PanelStyles.textPanel}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Panel;
