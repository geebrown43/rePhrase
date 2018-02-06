import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator} from 'react-navigation'
import Funny from './Funny'
import {Button, Icon} from 'native-base'

class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {
            fontFamily: 'Open',
            fontSize: 20
        },
        headerBackTitle: null,
        headerRight: (
            
            <Button transparent
              onPress={() => alert('This is a button!')} style={{marginRight: 10}}>
              <Icon name='paper-plane' style={{color: 'black', margin: 10}}/>
              </Button>
            
        ),
        headerLeft: (
            <Button  transparent
              onPress={() => alert('This is a button!')} style={{marginLeft: 10}}>
              <Icon name='camera' style={{color: 'black', margin: 10}}/>
              </Button>
        )
    }
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>HomeScreen</Text>
                <Button title='Funny' onPress={() => this.props.navigation.navigate('Funny')}/>
            </View>
        )
    }
}

export default StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Funny: {
        screen: Funny
    }
})