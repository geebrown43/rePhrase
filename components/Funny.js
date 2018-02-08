import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import { StackNavigator} from 'react-navigation'

export default class Funny extends React.Component {
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
              <ScrollView style={{margin: 10, backgroundColor: 'white', borderRadius: 10}}>
                  <Text style={styles.header}>Funny</Text>
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontFamily: 'Open',
        fontSize: 32
    }
})