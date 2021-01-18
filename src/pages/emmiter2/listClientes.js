import React, {useState, useEffect, useContext} from 'react';

import EmmiterContext from './emmiterContext';

import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

import {listClients as getClients} from '../../services/clients';

const Item = ({item, setClient,  navigation}) => (
  <TouchableOpacity
    onPress={async () => {
      await setClient(item);
      navigation.goBack();
    }}
    style={{padding: 20}}>
    <Text
      style={{
        marginTop: 10,
        width: width * 0.8,
        fontWeight: '300',
        fontSize: 20,
      }}>
      {item.full_name}
    </Text>
  </TouchableOpacity>
);

const listClients = ({navigation}) => {
  const {setClient} = useContext(EmmiterContext);

  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then(clients => {
      console.log(clients);
      setClients(clients);
    });
  }, []);

  const renderItem = ({item}) => (
    <Item setClient={setClient} item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      {clients.length > 0 ? (
        <FlatList
          data={clients}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Você ainda não possui clientes cadastrados.</Text>
      )}
    </SafeAreaView>
  );
};

listClients['navigationOptions'] = screenProps => ({
  title: 'Selecione um Cliente',
});

export default listClients;
