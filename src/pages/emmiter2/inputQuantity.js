import React, {useContext, useState} from 'react';

import EmmiterContext from './emmiterContext';

import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

const InputNumber = ({navigation}) => {
  const {setQuantity, quantity} = useContext(EmmiterContext);

  const [number, setNumber] = useState(quantity);

  function add() {
    setNumber(number + 5);
  }

  function remove() {
    setNumber(number >= 0 ? number - 5 : 0);
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <Text
        style={{
          fontSize: 20,
          color: '#4A4A4A',
          width: '50%',
          textAlign: 'center',
          marginTop: '10%',
        }}>
        Qual é a quantidade?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={()=> remove()}>
          <IconM name={'remove-circle'} size={40} color="#9CAE9F" />
        </TouchableOpacity>

        <TextInput
          style={{
            fontWeight: 'bold',
            fontSize: 46,
            color: '#444444',
            textAlign: 'center',
          }}
          value={number.toString()}
          onChangeText={a => setNumber(a)}
        />
        <TouchableOpacity onPress={()=> add()}>
          <IconM name={'add-circle'} size={40} color="#9CAE9F" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={async () => {
          await setQuantity(number);
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
  title: 'Qual é a quantidade?',
});

export default InputNumber;
