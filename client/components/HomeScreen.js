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
import { db } from './config'

const styles = StyleSheet.create({  
  main: {
    padding: 30
  }
})

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HOME',
    headerStyle: {
      backgroundColor: '#1D1D1D'
    },
    headerTintColor: '#34d1bf',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#1D1D1D' }}>
            <View style={{ width:100 }}>
              <Button
                  title="Adding Items Here"
                  onPress={() => this.props.navigation.navigate('AddItem')}
                  color='#34d1bf'
              />
            </View>
            <View style={{padding: 10}}></View>
            <View style={{ width:100 }}>
            <Button
                title="Listing Items Here"
                onPress={() => this.props.navigation.navigate('AddItem')}
                style={{padding: 500}}
                color='#34d1bf'
            />
            </View>
        </View>
    )
  }
}

export default HomeScreen
