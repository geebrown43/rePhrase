import React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import {
  Button,
  Icon,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import Funny from "./Funny";
import Camera from "./CameraAc";
import Loving from "./Loving";
import Card from './HomeCard';
import Serious from './Serious'

class HomeScreen extends React.Component {
  state = {
    camera: false,
    home: true
  };
  componentWillMount() {
    this.props.navigation.setParams({ _cameraActive: this._cameraActive });
  }

  _cameraActive = () => {
    this.setState({ camera: !this.state.camera, home: !this.state.home });
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      title: "r3phr@$e",
      headerStyle: {
        backgroundColor: "rgb(112, 176, 153)"
      },
      headerTitleStyle: {
        fontFamily: "Pacifico",
        fontSize: 28,
        color: "white",
        marginBottom: 17,
        padding: 5
      },
      headerBackTitle: "back",
      headerRight: (
        <Button
          transparent
          onPress={() => alert("This is a button!")}
          style={{ marginRight: 10 }}
        >
          <Icon name="paper-plane" style={{ color: "white", margin: 10 }} />
        </Button>
      ),
      headerLeft: (
        <Button
          transparent
          onPress={params._cameraActive}
          style={{ marginLeft: 8 }}
        >
          <Icon name="camera" style={{ color: "white", fontSize: 32 }} />
        </Button>
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "rgb(233, 233,240)" }}>
        {this.state.home ? (
          <ScrollView>
            <View style={{margin: 5}}>
              <Card/>
              <Card/>              
              <Card/>              
            </View>
          </ScrollView>
        ) : null}
        {this.state.camera ? <Camera /> : null}
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen }
});
const FunnyStack = StackNavigator({
  Funny: { screen: Funny }
});
const LovingStack = StackNavigator({
  Loving: { screen: Loving }
});

const SeriousStack = StackNavigator({
  Serious: {screen: Serious}
})
const styles = StyleSheet.create({
  heading: {
    fontSize: 36,
    textAlign: "center"
  }
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Funny: { screen: FunnyStack },
    Loving: { screen: LovingStack },
    Serious: { screen: SeriousStack}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Funny") {
          iconName = `ios-happy${focused ? "" : "-outline"}`;
        } else if (routeName === "Loving") {
          iconName = `ios-heart${focused ? "" : "-outline"}`;
        } else if (routeName === 'Serious') {
          iconName = `ios-ionitron${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    title: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "rgb(112, 176, 153)"
      },
      showLabel: false
    },
    animationEnabled: false,
    swipeEnabled: true,
   
  }
);
