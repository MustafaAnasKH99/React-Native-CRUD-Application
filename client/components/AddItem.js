import React, { Component } from 'react'
import { 
    View,
    Text, 
    TextInput, 
    StyleSheet,
    TouchableHighlight,
    Alert
   } from "react-native";

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'
import db from './config'

const addItem = (item) => {  
    var listRef = firebase.database().ref('items');
    listRef.push({name: item});
    // listRef.set({
    //   'name': item
    // });
    Alert.alert(item)
};

export class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            name: ''
        }
    }

    handleChange = (name) => {
        this.setState({name})
    }

    handleSubmit = () => {
        addItem(this.state.name);
        Alert.alert(this.state.name, ' Successfully Added')
    }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Creating Screen</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Add name!"
                onChangeText={this.handleChange}
            />

            <TouchableHighlight
                style={styles.button}
                underlayColor="white"
                onPress={() => this.handleSubmit()}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>

            <View style={styles.textView}>
                <Text>{this.state.name}</Text>
            </View>

            <Button
                icon={
                <Icon
                    name="arrow-right"
                    size={35}
                    color="white"
                />
                }
                iconRight
                title="Home Screen"
                onPress={() => this.props.navigation.navigate('Home')}
            />


        </View>
    )
  }
}

const styles = StyleSheet.create({  
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#6565fc'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
    textView: {
        borderWidth: 30,
        padding: 20
    }
  });

export default AddItem
