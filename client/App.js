import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SecondScreen from './components/SecondScreen'
import HomeScreen from './components/HomeScreen'


const AppNavigator = createStackNavigator(  
  {
  Home: HomeScreen,
  Details: SecondScreen
},
{
  initialRouteName: "Home"
}
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
