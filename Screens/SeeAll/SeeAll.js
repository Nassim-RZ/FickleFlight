import React from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { SeeAllStyles } from './SeeAllStyles';
import SeeAllDestinationCard from "../../Components/SeeAllDestinationCard/SeeAllDestinationCard";
import { data } from "../../Utils/Data";

const SeeAll = ({ navigation }) => {
    const renderSeeAllDestinationCard = ({ item }) => (
        <SeeAllDestinationCard
            imageSource={item.imageSource}
            destination={item.destination}
            country={item.country}
            code={item.code}
        />
    );
    return (
        <View style={SeeAllStyles.container}>
            <View style={SeeAllStyles.coverIcon}>
                <TouchableOpacity style={SeeAllStyles.icon} onPress={() => navigation.navigate('Explore')}>
                    <Image source={require('../../assets/Frame-2395.png')} />
                </TouchableOpacity>
                <Text style={SeeAllStyles.textFlight}>Trending Destinations</Text>
            </View>
            <View style={SeeAllStyles.viewList}>
                <FlatList 
                    vertical={true} 
                    showsVerticallScrollIndicator={false}
                    data={data}
                    renderItem={renderSeeAllDestinationCard}
                    keyExtractor={item => item.id}
                />
            </View> 
        </View>
    );
}

export default SeeAll;