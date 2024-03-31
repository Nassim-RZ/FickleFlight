import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { TrendingDestStyles } from "./TrendingDestStyles"; 
import DestinationCard from "../../Components/DestinationCard/DestinationCard";
import { data } from '../../Utils/Data';

const TrendingDestinations = ({ navigation }) => {

    const renderDestinationCard = ({ item }) => (
        <DestinationCard
            imageSource={item.imageSource}
            destination={item.destination}
            country={item.country}
            code={item.code}
        />
    );

  return (
    <View>
        <View style={TrendingDestStyles.trendLine}>
            <Text style={TrendingDestStyles.textFlight}>Trending Destinations</Text>
            <TouchableOpacity>
                <Text style={TrendingDestStyles.textSeeAll} onPress={() => navigation.navigate('SeeAll')} >See all</Text>
            </TouchableOpacity>
        </View>
        <View style={TrendingDestStyles.viewList}>
            <FlatList 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderDestinationCard}
                keyExtractor={item => item.id}
            />
        </View>
    </View>
  );
};

export default TrendingDestinations;