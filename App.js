
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import FrontSize from './Component/FrontSize';
// import Color from './Component/Color';
import Office from './Office';
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Office} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
