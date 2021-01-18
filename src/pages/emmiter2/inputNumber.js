import React, {useContext, useState} from 'react';

import EmmiterContext from './emmiterContext';

import {SafeAreaView, TextInput, TouchableOpacity, Text} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const InputNumber = ({navigation}) => {
  const {setPrice, price} = useContext(EmmiterContext);

  const [number, setNumber] = useState(price);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <Text
        style={{
          fontSize: 20,
          color: '#4A4A4A',
          width: '100%',
          textAlign: 'center',
          marginTop: '10%',
        }}>
        Qual o valor unitário?
      </Text>
      <TextInput
        style={{
          fontWeight: 'bold',
          fontSize: 46,
          color: '#444444',
          width: '100%',
          textAlign: 'center',
        }}
        value={parseFloat(number / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}
        onChangeText={a => setNumber(parseInt(a.replace(',', '')))}
      />
      <TouchableOpacity
        onPress={async () => {
          await setPrice(number);
          navigation.goBack();
        }}
        style={{
          width: '90%',
          marginLeft: '5%',
          backgroundColor: '#3CAD4C',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 100,
        }}>
        <Text style={{color: '#FFF', fontSize: 22, fontWeight: '500'}}>
          Salvar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

InputNumber['navigationOptions'] = screenProps => ({
  title: 'Qual o valor unitário?',
});

export default InputNumber;
