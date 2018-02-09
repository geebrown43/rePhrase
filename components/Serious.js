import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { StackNavigator} from 'react-navigation'
import { TextField } from "react-native-material-textfield";

export default class Serious extends React.Component {
    state = {
        value: ''
    };
    static navigationOptions = {
        title: 'Serious',
        headerStyle:{
            backgroundColor: "rgb(112, 176, 153)"
          },
        headerTitleStyle:{
            fontFamily: 'Pacifico',
            fontSize: 30,
            color:'white',
            marginBottom: 17,
            padding: 5
        }
    };

    render(){
    
            let value = this.state.value;
        return (
            <View style={{flex: 1, backgroundColor: "rgb(233, 233,240)"}}>
            <View style={{flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
            <Text
            style={{
              fontSize: 28,
              fontFamily: "Titi",
              color: "rgb(112, 176, 153)",
              textAlign: "center"
            }}
          >
            Text
          </Text>
            <ScrollView style={{ marginLeft: 15, marginRight: 15 }}>
            <TextField
              label="Convert"
              value={value}
              onChangeText={e => this.setState({ value: e })}
              multiline={true}
              baseColor="rgb(112, 176, 153)"
              tintColor="rgb(112, 176, 153)"
              labelTextStyle={{ fontFamily: "Titi" }}
              labelFontSize={22}
              textColor="grey"
              inputContainerPadding={10}
              labelHeight={36}
            />
          </ScrollView>
              </View>
              <View style={{flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
              <ScrollView style={{ margin: 15 }}>
            <Text style={styles.field}>Result</Text>
            <Text style={styles.result}>{value}</Text>
          </ScrollView>
              </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    result: {
        fontSize: 20,
        fontFamily: "Titi",
        color: "purple",
        marginTop: 5
      },
      field: {
        fontSize: 28,
        fontFamily: "Titi",
        color: "rgb(112, 176, 153)",
        textAlign: "center"
      }
})