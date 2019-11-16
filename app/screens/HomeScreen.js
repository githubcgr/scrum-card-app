import React, { Component } from 'react';
import {
  View,
  Alert,
ScrollView,
    TouchableOpacity
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

const uniqueId = DeviceInfo.getUniqueID();

import axios from 'axios';

import {
  Button, Text, Icon
} from "native-base";

import { Container, Header, Content, Card, CardItem, Right } from 'native-base';

export default class HomeScreen extends Component {

  constructor() {
    super();
    this.addRoom = this.addRoom.bind(this);
  }

  addRoom() {
    Alert.prompt('Qual o nome da sala?', null, (text) =>
        axios.post('http://localhost:3000/save-room', {
            name: text,
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    );
  }

  render() {
    return (
      <View>
          <Button Icon block onPress={this.addRoom}>
            <Icon name='add' />
            <Text>Criar Sala</Text>
          </Button>
          <ScrollView>
              <Container>
                  <Header />
                  <Content>
                      <Card>
                          <TouchableOpacity onPress={alert("aaa")}>
                              <CardItem>
                                  <Icon active name="logo-googleplus" />
                                  <Text>Google Plus</Text>
                                  <Right>
                                      <Icon name="arrow-forward" />
                                  </Right>
                              </CardItem>
                          </TouchableOpacity>

                      </Card>
                  </Content>
              </Container>
          </ScrollView>
      </View>
    )
  }
}