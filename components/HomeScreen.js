import React from 'react'
import {View, Text} from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom, tabBarIcon} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Funny from './Funny'
import Camera from './CameraAc'
import {Button, Icon} from 'native-base'
import Loving from './Loving'

class HomeScreen extends React.Component{
    state ={
        camera: false,
        home: true
    }
    componentWillMount(){
        this.props.navigation.setParams({_cameraActive:this._cameraActive})
    }

    _cameraActive = () => {
        this.setState({camera: !this.state.camera, home: !this.state.home})
      }
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            headerTitleStyle: {
                fontFamily: 'Mono',
                fontSize: 36
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
                  onPress={params._cameraActive} style={{marginLeft: 8}}>
                  <Icon name='camera' style={{color: 'black', fontSize: 30}}/>
                  </Button>
            )
        }
    }
    render(){
        return (
            <View style={{flex: 1}}>
                {this.state.home ? (<View><Text>HomeScreen</Text>
                <Button title='Funny' onPress={() => this.props.navigation.navigate('Funny')}/></View>) : null}
                {this.state.camera?(<Camera />): null}
                
            </View>
        )
    }
}

const HomeStack = StackNavigator({
    Home:{screen:HomeScreen}
})
const FunnyStack = StackNavigator({
    Funny:{screen: Funny}
})
const LovingStack = StackNavigator({
    Loving:{screen: Loving}
})

export default TabNavigator (
    {
      Home: { screen: HomeStack },
      Funny: { screen: FunnyStack },
      Loving:{screen: LovingStack}
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
          } else if (routeName === 'Funny') {
            iconName = `ios-happy${focused ? '' : '-outline'}`;
          } else if(routeName === 'Loving'){
              iconName = `ios-heart${focused ? '' : '-outline'}`
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
  );
  