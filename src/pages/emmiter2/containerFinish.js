import React, {useContext, useState} from 'react';

import EmmiterContext from './emmiterContext';

import {Text, View, Dimensions, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const ContainerFinish = ({navigation}) => {
  const {price, quantity, EmitirNFE} = useContext(EmmiterContext);

  const [labelPrice, setLabelPrice] = useState(
    'R$ ' +
      parseFloat(price * quantity)
        .toFixed(2)
        .toString()
        .replace('.', ','),
  );

  return (
    <View
      style={{
        backgroundColor: '#3CAD4C',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // alignItems:'center',
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text style={{color: '#FFF', fontSize: 22, fontWeight: 'bold'}}>
          Total
        </Text>
        <Text style={{color: '#FFF', fontSize: 34, fontWeight: 'bold'}}>
          {'R$ ' +
            parseFloat((price * quantity) / 100)
              .toFixed(2)
              .toString()
              .replace('.', ',')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={async () => {
          // await setNavigation(navigation);
          EmitirNFE(navigation);
        }}
        style={{
          width: '90%',
          marginLeft: '5%',
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 15,
          borderRadius: 100,
        }}>
        <Text style={{color: '#3CAD4C', fontSize: 22, fontWeight: '500'}}>
          Emitir NF-e
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContainerFinish;
