import React, { Component } from 'react'
import { View, Text, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
})

export class DetailsScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
    }
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
            />
            <View style={styles.text}>
                <Text>{this.state.text}</Text>
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
                title="Button with right icon"
                onPress={() => this.props.navigation.navigate('Home')}
            />
        </View>
    )
  }
}

export default DetailsScreen
