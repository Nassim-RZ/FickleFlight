import { StyleSheet, View } from 'react-native';
import Explore from './Screens/Explore/Explore';
import Profile from './Screens/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Informations from "./Components/Informations/Informations";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Explore">
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }}/>
          <Stack.Screen name="Informations" component={Informations} options={{ headerShown: false }}
          />
        </Stack.Navigator>
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
