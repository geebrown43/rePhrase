import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './components/Landing'
import { Font } from 'expo'
import Home from './components/HomeScreen';


export default class App extends React.Component {
  state ={
    fontLoaded: false,
    homeScreen:false,
  }
 async componentDidMount() {
    await Font.loadAsync({
      Mono: require('./assets/fonts/Monofett.ttf'),
      Titi: require('./assets/fonts/TitilliumWeb-Light.ttf'),
      Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
      Josefin: require('./assets/fonts/JosefinSlab-Regular.ttf')
    })
    this.setState({fontLoaded:true})
  }

  _homescreen = () => {
    this.setState({fontLoaded: false, homeScreen: true})
  }
  


  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? <Landing _homescreen={this._homescreen}/> : null}
        {this.state.homeScreen? <Home _cameraActive={this._cameraActive}/> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
