import React from "react";
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { DestCardStyles } from './DestCardStyles';

const DestinationCard = ({ imageSource, destination, country, code }) => {
    return (
        <View style={DestCardStyles.card}>
            <TouchableOpacity>
            <Image style={DestCardStyles.image} source={imageSource} />
            <View style={DestCardStyles.textCardFlex}>
                <View>
                    <Text style={DestCardStyles.destination}>{destination}</Text>
                    <Text style={DestCardStyles.country}>{country}</Text>
                </View>
                <View>
                    <Text style={DestCardStyles.code}>{code}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default DestinationCard;