import React, { useState } from 'react';
import { View } from 'react-native';
import { ExploreStyles } from './ExploreStyles';
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import ParisCard from '../../Components/ParisCard/ParisCard';
import FlightSection from '../../Components/FlightSection/FlightSection';
import TrendingDestinations from '../../Components/TrendingDestinations/TrendingDestinations';

const Explore = ({ navigation }) => {

    const [activeTab, setActiveTab] = useState('Explore');

    return (
        <View style={ExploreStyles.container}>
            <TopNavBar navigation={navigation} />                 
            <ParisCard/>
            <FlightSection/>
            <TrendingDestinations navigation={navigation}/>
            <View style={ExploreStyles.bottom}>
                <BottomNavBar 
                    imageSource={[require('../../assets/explore1.png'), require('../../assets/userprofile1.png')]}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} 
                    navigation={navigation} 
                />
            </View>
        </View>
    );
}

export default Explore;