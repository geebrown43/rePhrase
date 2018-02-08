import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'

export default class Loving extends React.Component {
    static navigationOptions = {
        title: 'r3phr@$e',
        headerStyle:{
            backgroundColor: "rgb(112, 176, 153)"
          },
        headerTitleStyle:{
            fontFamily: 'Pacifico',
            fontSize: 28,
            color:'white',
            marginBottom: 17,
            padding: 5
        }
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: "rgb(233, 233,240)"}}>
                <Text>Loving</Text>
            </View>
        )
    }
}