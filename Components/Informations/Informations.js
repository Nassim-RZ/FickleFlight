import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { InfoStyles } from "./InfoStyles"; 

const Informations = ({ navigation }) => {
  return (
        <View><Image style={InfoStyles.cover} source={require('../../assets/plage.jpg')} />
            <View style={InfoStyles.coverIcon}>
                <TouchableOpacity style={InfoStyles.icon} onPress={() => navigation.navigate('Explore')}>
                    <FontAwesome name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={InfoStyles.icon}>
                    <FontAwesome name="pencil" size={23} color="black" />
                </TouchableOpacity>
            </View>
            <Image 
                style={InfoStyles.profileImage}
                source={require('../../assets/ballon.jpg')}
            />
        </View>
  );
};

export default Informations;
