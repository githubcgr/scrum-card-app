import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';

import {
  Container, Header, Content, Button, Text,
  Icon
} from "native-base";


export default class HomeScreen extends Component {

  constructor() {
    super();
    this.addRoom = this.addRoom.bind(this);
  }

  addRoom() {
    Alert.prompt('Qual o nome da sala?', null, (text) =>
        console.log('You entered ' + text),
    );
    console.log("aaa")
  }

  render() {
    return (
      <View>
          <Button Icon block onPress={this.addRoom}>
            <Icon name='add' />
            <Text>Criar Sala</Text>
          </Button>
      </View>
    )
  }
}