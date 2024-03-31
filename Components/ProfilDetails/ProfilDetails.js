import React from 'react';
import { View, Text } from 'react-native';
import { DetailStyles } from "./ProfilDetailStyles"; 
import PrifileOptions from "../../Components/PrifileOptions/PrifileOptions";


const ProfilDetails = ({ navigation }) => {
  return (
    <View style={DetailStyles.profileDetails}>
      <View style={DetailStyles.nameParticular}>
        <Text style={DetailStyles.name}>Macy Johnson</Text>
        <Text style={DetailStyles.localization}>Baguio, Philippines</Text>
      </View>
      <Text style={DetailStyles.bio}>I like the beach, mountains, forest and everything about naturel :)</Text>
      <View style={DetailStyles.separator} />
      <PrifileOptions/>            
    </View>
  );
};

export default ProfilDetails;