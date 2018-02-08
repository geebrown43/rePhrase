import React from "react";
import {StyleSheet, Image} from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";



export default class HomeCard extends React.Component{
    render(){
        return (
            <Card style={{ flex: 1}}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.header}>R3PHR@$E</Text>
                      <Text note>Feb 7, 2018</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image
                      source={require("../assets/images/pencils.jpeg")}
                      style={{ height: 200, width: 330, flex: 1 }}
                    />
                    <Text>Welcome to RePhrase! Lets Edit some text:</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: "#87838B" }}>
                      <Icon name="logo-github" />
                      <Text>1,926 stars</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        fontSize: 20
    }
})