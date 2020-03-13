import React, { Component } from 'react';

import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// import { Container } from './styles';

export default class Nfe extends Component {
  static navigationOptions = {
    title: 'Nova NF-e',
  };
  render() {
    return <LinearGradient
      colors={['#FFF', '#E4EDFF']}
      style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
    </LinearGradient>
  }
}
