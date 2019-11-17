import React, { Component } from 'react';
import {
    View,
    Alert,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';

import axios from 'axios';

import {
  Button, Text
} from "native-base";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { Container, Header, Content, Card, CardItem, Right } from 'native-base';

export default class HomeScreen extends Component {

  constructor() {
    super();
    this.addRoom = this.addRoom.bind(this);

    this.state = {
        rooms: []
    }

    this.getRooms();
  }

  getRooms() {
      var $this = this;
      axios.get('http://localhost:3000/get-rooms').then(function (resp){
          $this.setState({rooms: resp.data.rooms})
          console.log(resp.data)
      })
  }
  addRoom() {
      var $this = this;

      Alert.prompt('Qual o nome da sala?', null, (text) =>
        axios.post('http://localhost:3000/save-room', {
            name: text,
        })
        .then(function (response) {
            $this.getRooms();
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    );
  }

  render() {
      const {navigate} = this.props.navigation;

      return (
      <View>
          <Button Icon block onPress={this.addRoom}>
            <Icon name='plus' />
            <Text>Criar Sala</Text>
          </Button>
          <ScrollView>
              <Container>
                  <Header />
                  <Content>
                      <FlatList
                      data={this.state.rooms}
                      renderItem={({item}) =>
                          <Card>
                              <TouchableOpacity onPress={() => navigate('Links', {name: 'Jane'})}
                              >
                                  <CardItem>
                                      <Icon name="door" size={ 32 }></Icon>
                                      <Text>{item.name}</Text>
                                      <Right>
                                          <Icon name="arrow-right" size={ 32 } />
                                      </Right>
                                  </CardItem>
                              </TouchableOpacity>
                          </Card>
                      }
                      />
                  </Content>
              </Container>
          </ScrollView>
      </View>
    )
  }
}