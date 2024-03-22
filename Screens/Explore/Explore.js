import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import DestinationCard from "../../Components/DestinationCard/DestinationCard";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import Alert from '../../Components/Alert/Alert';
import { ExploreStyles } from './ExploreStyles';

const Explore = ({ navigation }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const heartIconPress = () => {
        setTimeout(() => {
            setIsAlertVisible(true);
        }, 2000);
    };
    return (
        <View style={ExploreStyles.container}>
            <TopNavBar navigation={navigation} />                 
            <View style={ExploreStyles.viewImgParis}>
                <Image style={ExploreStyles.imgParis} source={require('../../assets/eiffel.png')} />
                <TouchableOpacity style={ExploreStyles.heart} onPress={() =>  heartIconPress()} >
                    <Alert
                        visible={isAlertVisible}
                        message="This destination has been added to your favourite"
                        onClose={() => setIsAlertVisible(false)}
                    />
                    <FontAwesome name="heart-o" size={24} color="white" regular />
                </TouchableOpacity>
                <Text style={ExploreStyles.textParis}>Paris</Text>
                <Text style={ExploreStyles.textFrom}>FROM</Text>
                <Text style={ExploreStyles.textPrice}>$1299</Text>
            </View>
            <Text style={ExploreStyles.textFlight}>Upcoming Flight</Text>
            <View style={ExploreStyles.viewFlight}>
                <View>
                    <Text style={ExploreStyles.abrevStartingPoint}>SIN</Text>
                    <Text style={ExploreStyles.startingPoint}>Singapore</Text>
                </View>
                <View style={ExploreStyles.viewAirPlan}>
                <Image source={require('../../assets/plan.png')} style={ExploreStyles.airPlan}/>
                </View>
                <View>
                    <Text style={ExploreStyles.abrevEndingPoint}>LAX</Text>
                    <Text style={ExploreStyles.endingPoint}>Los Angeles</Text>
                </View>
            </View>
            <View style={ExploreStyles.separator} />
            <View style={ExploreStyles.scndViewFlight}>
                <Text style={ExploreStyles.dateDepart}>Departs on: 1 May, 08:00 AM</Text>
                <Text style={ExploreStyles.remainingDays}> <Text style={ExploreStyles.boldText}>4 days </Text> to go</Text>
            </View>
            <View style={ExploreStyles.spaceTrendText}>
                <Text style={ExploreStyles.textFlight}>Trending Destinations</Text>
                <TouchableOpacity>
                    <Text style={ExploreStyles.textSeeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={ExploreStyles.viewList}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <DestinationCard imageSource={require('../../assets/boracay.jpg')} destination="Boracay" country="Philippines" code="5F4N" />
                    <DestinationCard imageSource={require('../../assets/maldives.jpg')} destination="Baros" country="Maldives" code="7D6N" />
                    <DestinationCard imageSource={require('../../assets/bali.jpg')} destination="Bali" country="Indonesia" code="3D2N" />
                    <DestinationCard imageSource={require('../../assets/palawan.jpg')} destination="Palawan" country="Philippines" code="3D2N" />
                </ScrollView>      
            </View> 
            <BottomNavBar navigation={navigation}/>
        </View>
    );
}

export default Explore;