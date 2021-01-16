import React, { Component } from 'react';

import { View, FlatList, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { listClients } from '../../services/clients';
import { cardClient } from './styles';

function Item({ full_name, img_link, telephone }) {
  return (
    <View style={cardClient.container}>
      <Image source={{ uri: img_link }} style={cardClient.imgClient} />
      <View>
        <Text style={cardClient.clientName}>{full_name}</Text>
        <Text style={cardClient.clientInfo}>{telephone}</Text>
      </View>
    </View>

  );
}

export default class Clientes extends Component {

  state = {
    clients: null
  }

  async componentDidMount() {
    this.setState({ clients: await listClients() })
    // console.log(this.state.clients)
  }

  static navigationOptions = {
    title: 'Meus Clientes',
  };
  render() {
    return (
      <LinearGradient
        colors={['#FFF', '#E4EDFF']}
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>

        <FlatList
          numColumns={1}
          data={this.state.clients}
          style={{ width: '100%', height: '100%' }}
          renderItem={({ item }) => <Item full_name={item.full_name} img_link={item.img_link} telephone={item.telephone} />}
          keyExtractor={item => item.id}
        />

      </LinearGradient>
    )
  }
}
