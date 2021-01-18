import React, {useContext} from 'react';

import EmmiterContext from './emmiterContext';

import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const ClientContainer = ({navigation}) => {
  const {product, price, quantity} = useContext(EmmiterContext);
  return (
    <View
      style={{
        padding: 20,
        width,
      }}>
      <View
        style={{
          paddingVertical: 15,
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: '#DDDDDD',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#444444'}}>
            Produto
          </Text>
          <Text
            style={{
              marginTop: 10,
              width: width * 0.8,
              fontWeight: '300',
              fontSize: 22,
              color: '#3CAD4C',
            }}>
            {product.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductsList');
          }}>
          <IconM name={'edit'} size={25} color="#9CAE9F" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 15,
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: '#DDDDDD',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#444444'}}>
            Valor
          </Text>
          <Text
            style={{
              marginTop: 10,
              width: width * 0.8,
              fontWeight: '300',
              fontSize: 22,
              color: '#3CAD4C',
            }}>
            {'R$ ' +
              parseFloat(price/100)
                .toFixed(2)
                .toString()
                .replace('.', ',')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('InputNumber');
          }}>
          <IconM name={'edit'} size={25} color="#9CAE9F" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 15,
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: '#DDDDDD',
          flexDirection: 'row',
          alignItems: 'flex-end',
          color: '#3CAD4C',
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#444444'}}>
            Quantidade
          </Text>
          <Text
            style={{
              marginTop: 10,
              width: width * 0.8,
              fontWeight: '300',
              fontSize: 22,
              color: '#3CAD4C',
            }}>
            {quantity}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('InputQuantity');
          }}>
          <IconM name={'edit'} size={25} color="#9CAE9F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientContainer;
