import React, { useState } from "react";
import { View, Image } from 'react-native';
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import { ProfileStyles } from './ProfileStyles';
import ProfilDetails from "../../Components/ProfilDetails/ProfilDetails";
import Header from "../../Components/Header/Header";

const Profile = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Profile');
    return (
        <View style={ProfileStyles.container}>
            <Header navigation={navigation}/>
            <View style={ProfileStyles.profileBody}>
                <Image 
                    style={ProfileStyles.profileImage}
                    source={require('../../assets/Profile-Image.png')}
                />
                <ProfilDetails/>
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