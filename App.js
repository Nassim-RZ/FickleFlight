import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Explore from './Screens/Explore/Explore';
import Profile from './Screens/Profile/Profile';
import SeeAll from './Screens/SeeAll/SeeAll';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAsync() {
      await Font.loadAsync({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Inter': require('./assets/fonts/Inter.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
        'BalooBhai2': require('./assets/fonts/BalooBhai2.ttf'),
        'BalooBhai2-Bold': require('./assets/fonts/BalooBhai2-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator tabBar={() => null} initialRouteName="Explore">
          <Tab.Screen name="Explore" 
            component={Explore} 
            options={{ 
              headerShown: false,
              }}
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{ 
              headerShown: false, 
            }}
          /> 
          <Tab.Screen 
            name="SeeAll" 
            component={SeeAll} 
            options={{ 
              headerShown: false, 
            }}
          />          
          </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
