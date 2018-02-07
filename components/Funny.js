import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'

export default class Funny extends React.Component {
    static navigationOptions = {
        title: 'Funny',
        headerStyle:{
            backgroundColor: 'rgb(90, 179, 152)'
          },
        headerTitleStyle:{
            fontFamily: 'Mono',
            fontSize: 40,
            color:'white'
        }
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Text>Funny</Text>
            </View>
        )
    }
}