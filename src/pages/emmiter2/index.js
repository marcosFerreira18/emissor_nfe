import React, {Component, useContext, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';

import EmmiterContext from './emmiterContext';

import ClientContainer from './clienteContainer';
import ProductContainer from './productContainer';
import ContainerFinish from './containerFinish';

const emmiter2 = ({navigation}) => {
  const {product, price, quantity} = useContext(EmmiterContext);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ClientContainer navigation={navigation} />
        <ProductContainer  navigation={navigation} />
      </ScrollView>
      <ContainerFinish />
    </View>
  );
};

emmiter2['navigationOptions'] = screenProps => ({
  title: 'Emitir Nova Nota',
});

export default emmiter2;
