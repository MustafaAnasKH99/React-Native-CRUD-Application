import React, { Component } from 'react'
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class DetailsScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.push('Details')}
            />
            {/* <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            /> */}
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
            <Button
                title="Go back"
                onPress={() => this.props.navigation.goBack()}
            />
        </View>
    )
  }
}

export default DetailsScreen
