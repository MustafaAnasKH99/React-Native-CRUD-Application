import React, { Component } from 'react'
import { 
    View,
    Text, 
    TextInput, 
    StyleSheet,
    TouchableHighlight,
    Alert,
    FlatList
   } from "react-native"


import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase'
import { db } from './config'

const addItem = (item) => {  
    var listRef = firebase.database().ref('items');
    listRef.push({name: item});
    // listRef.set({
    //   'name': item
    // });
    Alert.alert(item)
};

export class AddItem extends Component {
  static navigationOptions = {
    title: 'CREATE ITEMS',
    headerStyle: {
      backgroundColor: '#1D1D1D'
    },
    headerTintColor: '#34d1bf',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

    constructor(props){
        super(props)
        this.state = {
            text: '',
            name: '',
            names: []
        }
    }

    handleChange = (name) => {
        this.setState({name})
    }

    handleSubmit = () => {
        addItem(this.state.name);
        Alert.alert(this.state.name, ' Successfully Added')
    }

    componentDidMount(){
      db.ref('items/').on('value', async (snapshot) => {
      const name = snapshot.val() || 'Anonymous';
      const nameFinal = Object.values(name)
      await nameFinal.map(user => {
        this.setState({names: [...this.state.names, user]})
      })
      })
    }

  render() {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#34d1bf' }}>
            <View style={styles.rowContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder="TYPE NAME!"
                    placeholderTextColor = '#3454d1'
                    onChangeText={this.handleChange}
                />

                <TouchableHighlight
                    style={styles.buttonText}
                    underlayColor="white"
                    onPress={() => this.handleSubmit()}
                >
                    <Text style={{ color: '#34d1bf', fontSize: 50, paddingLeft: 15}}>+</Text>
                </TouchableHighlight>
              </View>
              {/* <Button
                icon={
                <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                />
                }
                iconRight
                title="Home Screen"
                onPress={() => this.props.navigation.navigate('Home')}
              /> */}
              <FlatList
                data={this.state.names}
                renderItem={({item}) => <Text style={styles.textAded}>{item.name}</Text>}
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
    inputField: {
      textDecorationColor: 'red',
      fontSize: 30,
      margin: 0,
    },
    buttonText: {
      fontSize: 60,
      color: '#111',
      padding: 10,
      alignSelf: 'center',
      margin: 0
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
        borderWidth: 3,
        padding: 5
    },
    textAded: {
      fontSize: 30,
      color: '#EFEFEF',
      width: 600,
      backgroundColor: '#34d1bf',
      paddingLeft: 30
    },
    rowContainer: {
      flexDirection: 'row',
      backgroundColor: '#EFEFEF',
      width: 420,
      paddingLeft: 30,
      marginBottom: 20,
      borderBottomRightRadius: 30
    }
  });

// #0B1A10 Dark
// #42B261 Green
// #64CC84 Lighter Green

export default AddItem
