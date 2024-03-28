import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import { ProfileStyles } from './ProfileStyles';
import Panel from "../../Components/Panel/Panel";

const Profile = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Profile');
    return (
        <View style={ProfileStyles.container}>
            <Image style={ProfileStyles.cover} source={require('../../assets/plage.jpg')} />
            <View style={ProfileStyles.coverIcon}>
                    <TouchableOpacity style={ProfileStyles.icon} onPress={() => navigation.navigate('Explore')}>
                        <Image source={require('../../assets/Frame-2395.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={ProfileStyles.icon}>
                        <Image source={require('../../assets/Frame-2396.png')} />
                    </TouchableOpacity>
                </View>
            <View style={ProfileStyles.globalWhiteView}>
                <Image 
                    style={ProfileStyles.profileImage}
                    source={require('../../assets/Profile-Image.png')}
                />
                <Text style={ProfileStyles.name}>Macy Johnson</Text>
                <Text style={ProfileStyles.localization}>Baguio, Philippines</Text>
                <Text style={ProfileStyles.bio}>I like the beach, mountains, forest and everything about naturel :)</Text>
                <View style={ProfileStyles.separator} />
                <Panel />
                <TouchableOpacity>
                    <View style={ProfileStyles.helpArea}>
                        <Image source={require('../../assets/ion_help-circle-outline.png')} />
                        <Text style={ProfileStyles.textArea}>Have questions? We are here to help</Text>
                    </View>
                </TouchableOpacity>            
            </View>
                <View style={ProfileStyles.bottom}>
                    <BottomNavBar 
                    imageSource={[require('../../assets/explore.png'), require('../../assets/userprofile.png')]}  
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    navigation={navigation}
                    />
                </View>
        </View>
    )
};

export default Profile;