import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { PanelStyles } from "./PanelStyles"; 

const Panel = () => {
  return (
    <View style={PanelStyles.panel}>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <FontAwesome name="credit-card" size={20} color="#669bbc" />
            </View>
            <Text style={PanelStyles.textPanel}>Payment Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <FontAwesome name="shield" size={20} color="#669bbc" />
            </View>
            <Text style={PanelStyles.textPanel}>Covid Advisory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <FontAwesome name="link" size={20} color="#669bbc" />
            </View>
            <Text style={PanelStyles.textPanel}>Referral Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <FontAwesome name="gear" size={20} color="#669bbc" />
            </View>
            <Text style={PanelStyles.textPanel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={PanelStyles.lineSpace}>
            <View style={PanelStyles.iconCircle}>
                <FontAwesome name="chevron-right" size={20} color="#669bbc" />
            </View>
            <Text style={PanelStyles.textPanel}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Panel;
