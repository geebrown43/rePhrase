import React from 'react'
import { View, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native'
import {Button, Icon} from 'native-base'

let { width, height } = Dimensions.get('window')

class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>r3phr@$e</Text>
                    <Text style={styles.subtitle}>Let's clean it up</Text>
                </View>

                <View>
                    <Button iconLeft light onPress={this.props._homescreen} style={{padding: 10, marginTop: 20}}><Icon name='happy' style={{color: 'rgb(112, 176, 153)'}}/><Text style={styles.buttonSpacing}>Enter</Text></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontFamily: 'Pacifico',
        marginBottom: 20,
        color: 'white'
    },
    subtitle: {
        textAlign: 'center',
        fontFamily: 'Titi',
        fontSize: 20,
        color: 'purple'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        backgroundColor: "rgb(112, 176, 153)"
    },
    header: {
        justifyContent: 'space-between',
       
    },
    buttonSpacing:{
        margin:10,
        fontSize: 16,
        color: 'rgb(112, 176, 153)'
    }
})

export default Landing