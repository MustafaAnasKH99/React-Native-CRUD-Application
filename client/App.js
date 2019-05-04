import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AddItem from './components/AddItem'
import HomeScreen from './components/HomeScreen'


const AppNavigator = createStackNavigator(  
{
  Home: HomeScreen,
  AddItem: AddItem
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
