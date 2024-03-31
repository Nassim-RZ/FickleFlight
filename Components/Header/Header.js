import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { HeaderStyles } from "./HeaderStyles"; 

const Header = ({ navigation }) => {
  return (
    <View>
      <Image style={HeaderStyles.cover} source={require('../../assets/plage.jpg')} />
      <View style={HeaderStyles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
            <Image source={require('../../assets/Frame-2395.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/Frame-2396.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;