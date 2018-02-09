import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { StackNavigator} from 'react-navigation'
import { TextField} from 'react-native-material-textfield'

export default class Funny extends React.Component {
    state ={
        value: ''
    }

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
        let value = this.state.value
        return (
            <View style={{flex: 1, backgroundColor: "rgb(233, 233,240)"}}>
            <Text style={styles.header}>Funny</Text>
            <View style={{flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
                <TextField label='Mean Text' value={value} onChangeText={(e) => this.setState({value: e})} multiline={true}/>
              </View>
              <View style={{flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
                 
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