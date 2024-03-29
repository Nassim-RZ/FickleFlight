import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import DestinationCard from "../../Components/DestinationCard/DestinationCard";
import BottomNavBar from "../../Components/BottomNavBar/BottomNavBar";
import Alert from '../../Components/Alert/Alert';
import { ExploreStyles } from './ExploreStyles';
import { data } from '../../Utils/Data';

const Explore = ({ navigation }) => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('Explore');
    const heartIconPress = () => {
        setTimeout(() => {
            setIsAlertVisible(true);
        }, 2000);
    };
    const renderDestinationCard = ({ item }) => (
        <DestinationCard
            imageSource={item.imageSource}
            destination={item.destination}
            country={item.country}
            code={item.code}
        />
    );
    return (
        <View style={ExploreStyles.container}>
            <TopNavBar navigation={navigation} />                 
            <View style={ExploreStyles.viewImgParis}>
                <Image style={ExploreStyles.imgParis} source={require('../../assets/Paris-card.png')} />
                <TouchableOpacity style={ExploreStyles.heart} onPress={() =>  heartIconPress()} >
                    <Alert
                        visible={isAlertVisible}
                        message="This destination has been added to your favourite"
                        onClose={() => setIsAlertVisible(false)}
                    />
                    <Image source={require('../../assets/Heart.png')} />
                </TouchableOpacity>
                <Text style={ExploreStyles.textParis}>Paris</Text>
                <Text style={ExploreStyles.textFrom}>FROM</Text>
                <Text style={ExploreStyles.textPrice}>$1299</Text>
            </View>
            <Text style={ExploreStyles.textFlight}>Upcoming Flight</Text>
            <View style={ExploreStyles.viewTravel}>
                <View style={ExploreStyles.viewUpTravel}>
                    <View style={ExploreStyles.textLeft}>
                        <Text style={ExploreStyles.textUpper}>SIN</Text>
                        <Text style={ExploreStyles.textLower}>Singapore</Text>
                    </View>
                    <View style={ExploreStyles.ViewAirPlan}>
                        <Image source={require('../../assets/Frame-13.png')} style={ExploreStyles.airPlan}/>
                    </View>
                    <View style={ExploreStyles.textRight}>
                        <Text style={ExploreStyles.textUpperScnd}>LAX</Text>
                        <Text style={ExploreStyles.textLower}>Los Angeles</Text>
                    </View>
                </View>
                <View style={ExploreStyles.separator} />
                <View style={ExploreStyles.viewDownTravel}>
                    <Text style={ExploreStyles.dateDepart}>Departs on: 1 May, 08:00 AM</Text>
                    <Text style={ExploreStyles.remainingDays}> <Text style={ExploreStyles.boldText}>4 days </Text> to go</Text>
                </View>
            </View>
            <View>
                <View style={ExploreStyles.trendLine}>
                    <Text style={ExploreStyles.textFlight}>Trending Destinations</Text>
                    <TouchableOpacity>
                        <Text style={ExploreStyles.textSeeAll} onPress={() => navigation.navigate('SeeAll')} >See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={ExploreStyles.viewList}>
                    <FlatList 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={renderDestinationCard}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
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