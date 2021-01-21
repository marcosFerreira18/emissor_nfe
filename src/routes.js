import React from 'react';
import {View, Text} from 'react-native';

import Login from './pages/login';
import Home from './pages/home';
import Product from './pages/product';
import Clientes from './pages/clientes';
// import Emitter1 from './pages/emitter';
import Emitter from './pages/emmiter2';
import ClientsList from './pages/emmiter2/listClientes';
import ProductsList from './pages/emmiter2/listProducts';
import InputNumber from './pages/emmiter2/inputNumber';
import InputQuantity from './pages/emmiter2/inputQuantity';
import Nfe from './pages/nfe';
import WebView from './pages/viewDanfe';
import Register from './pages/register';
import Address from './pages/address';
import ListDanfs from './pages/listDanfs';
import Upload from './pages/uploadImages';

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

const AppStackComp = createStackNavigator({
  Home,
  Product,
  Clientes,
  Nfe,
  WebView,
  Emitter,
  ClientsList,
  ProductsList,
  InputNumber,
  InputQuantity,
  ListDanfs,
});
const AuthStack = createStackNavigator({
  Login,
  Register,
  Address,
});

export const createRootNavigator = (signedIn = false, params = null) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: {screen: AppStackComp, path: ''},
        Auth: {screen: AuthStack},
      },
      {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: signedIn ? 'App' : 'Auth',
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    ),
  );
};
