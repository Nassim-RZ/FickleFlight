import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import { ProfileStyles } from './ProfileStyles';
import Panel from "../../Components/Panel/Panel";
import Informations from "../../Components/Informations/Informations";

const Profile = ({ navigation }) => {
    return (
        <View style={ProfileStyles.container}>
            <Informations navigation={navigation} />
            <View style={ProfileStyles.globalWhiteView}>
                <Text style={ProfileStyles.name}>Macy Johnson</Text>
                <Text style={ProfileStyles.localization}>Baguio, Philippines</Text>
                <Text style={ProfileStyles.bio}>I like the beach, mountains, forest and everything about naturel :)</Text>
                <View style={ProfileStyles.separator} />
                <Panel />
                <TouchableOpacity>
                    <View style={ProfileStyles.helpArea}>
                        <FontAwesome name="question-circle" size={20} color="#669bbc" />
                        <Text style={ProfileStyles.textArea}>Have questions? We are here to help</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomNavBar navigation={navigation} />
        </View>
    )
};

export default Profile;