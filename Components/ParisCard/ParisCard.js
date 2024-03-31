import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Alert from '../../Components/Alert/Alert';
import { ParisCardStyles } from "./ParisCardStyles"; 

const ParisCard = () => {

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const heartIconPress = () => {
    setTimeout(() => {
        setIsAlertVisible(true);
    }, 2000);
  };
  
  return (
    <View style={ParisCardStyles.viewImgParis}>
      <Image style={ParisCardStyles.imgParis} source={require('../../assets/Paris-card.png')} />
      <TouchableOpacity style={ParisCardStyles.heart} onPress={() =>  heartIconPress()} >
        <Alert
          visible={isAlertVisible}
          message="This destination has been added to your favourite"
          onClose={() => setIsAlertVisible(false)}
        />
        <Image source={require('../../assets/Heart.png')} />
      </TouchableOpacity>
      <Text style={ParisCardStyles.textParis}>Paris</Text>
      <Text style={ParisCardStyles.textFrom}>FROM</Text>
      <Text style={ParisCardStyles.textPrice}>$1299</Text>
    </View>
  );
};

export default ParisCard;