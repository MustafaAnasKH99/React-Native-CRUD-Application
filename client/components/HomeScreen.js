import React, { Component } from 'react';  
import {  
  View,
  Text,
  Button, 
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS
} from 'react-native';

export class HomeScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button
                title="Adding Items Here"
                onPress={() => this.props.navigation.navigate('AddItem')}
            />
            <Button
                title="Listing Items Here"
                onPress={() => this.props.navigation.navigate('AddItem')}
            />
        </View>
    )
  }
}

export default HomeScreen
