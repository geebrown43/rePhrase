import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'

export default class Funny extends React.Component {
    static navigationOptions = {
        title: 'Funny',
        headerTitleStyle:{
            fontFamily: 'Open',
            fontSize: 22
        }
    }
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Funny</Text>
            </View>
        )
    }
}