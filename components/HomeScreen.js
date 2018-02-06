import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'

class HomeScreen extends React.Component{
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}

export default StackNavigator({
    Home: {
        screen: HomeScreen,
    }
})