import React, {useContext} from 'react';

import EmmiterContext from './emmiterContext';

import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const ClientContainer = ({navigation}) => {
  const {client} = useContext(EmmiterContext);

  return (
    <View
      style={{
        padding: 20,
        width,
      }}>
      <View
        style={{
          paddingBottom: 10,
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: '#DDDDDD',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#444444'}}>
            Cliente
          </Text>
          <Text
            style={{
              marginTop: 10,
              width: width * 0.8,
              fontWeight: '300',
              fontSize: 22,
              color: '#3CAD4C',
            }}>
            {client.full_name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ClientsList');
          }}>
          <IconM name={'edit'} size={30} color="#9CAE9F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientContainer;
