import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'

export default class Loving extends React.Component {
    static navigationOptions = {
        title: 'Loving',
        headerTitleStyle:{
            fontFamily: 'Mono',
            fontSize: 36
        }
    }
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Loving</Text>
            </View>
        )
    }
}