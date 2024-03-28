import React from "react";
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { SeeAllDestStyles } from './SeeAllDestStyles';

const SeeAllDestinationCard = ({ imageSource, destination, country, code }) => {
    return (
        <View style={SeeAllDestStyles.container}>
            <View style={SeeAllDestStyles.card}>
                <TouchableOpacity>
                    <Image style={SeeAllDestStyles.image} source={imageSource} />
                    <View style={SeeAllDestStyles.textCardFlex}>
                        <View>
                            <Text style={SeeAllDestStyles.destination}>{destination}</Text>
                            <Text style={SeeAllDestStyles.country}>{country}</Text>
                        </View>
                        <View>
                            <Text style={SeeAllDestStyles.code}>{code}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SeeAllDestinationCard;