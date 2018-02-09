import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Funny extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: "rgb(112, 176, 153)"
        },
        headerTitleStyle: {
            fontFamily: 'Pacifico',
            fontSize: 30,
            color: 'white',
            marginBottom: 17,
            padding: 5
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(233, 233,240)" }}>
                <View style={{ flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2 }}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Titi',
        color: "rgb(112, 176, 153)"
    }
})