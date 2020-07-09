import React, { Component } from 'react';

import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import { resgisterAddressCompany } from '../../services/company';

import { getEndereco } from '../../services/functions';
import { styles } from './styles.js'
export default class Address extends Component {

  state = {
    cep: '',
    street: '',
    city: '',
    neighborhood: '',
    state: '',
    number: '',
    complement: '',
    id: ''
  }

  static navigationOptions = {
    // headerTransparent: true
    title: "Cadastro de Endereço"
  }

  componentDidMount = () => {
    // console.log(this.props.navigation.state.params.id)
    this.setState({ id: this.props.navigation.state.params.id })
  }


  resgisterCompany = async () => {
    const result = await resgisterAddressCompany(this.state)
    // const result = { status: 1 }

    if (result.status == 1) {
      this.props.navigation.navigate({ routeName: 'Login' })
    } else {
      alert(result.msg)
    }

  }


  setEndereco = async () => {
    const {
      cep,
      logradouro,
      bairro,
      localidade,
      uf } = await getEndereco(this.state.cep);

    const a = {
      cep,
      street: logradouro,
      city: localidade,
      neighborhood: bairro,
      state: uf
    }

    if (!cep.length)
      alert('CEP não encontrado.');

    this.setState(a)
  }

  render() {
    return (
      // <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <LinearGradient
        colors={['#FFF', '#FFF', '#FFF1']}
        style={{ width: '100%', height: '100%', alignItems: "flex-start", justifyContent: "flex-start", padding: 20, paddingTop: 40 }}>
        <KeyboardAvoidingView style={{}}>



          {/* <Image source={logo} /> */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.inputContainer}>
              <Icon name="map-marker" size={15} color="#3CAD4C" />
              <TextInput
                onChangeText={cep => this.setState({ cep })}
                placeholder='CEP' style={[styles.input]}
                onBlur={this.setEndereco}
                autoCapitalize='none' />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="road" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.street}
                onChangeText={street => this.setState({ street })}
                placeholder='Rua' style={[styles.input]}
                autoCapitalize='none' />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="map-marker" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.neighborhood}
                onChangeText={neighborhood => this.setState({ neighborhood })}
                placeholder='Bairro' style={[styles.input]}
                autoCapitalize='none' />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="address-card" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.number}
                onChangeText={number => this.setState({ number })}
                placeholder='Nº' style={[styles.input]}
                autoCapitalize='none' />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="phone" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.complement}
                onChangeText={complement => this.setState({ complement })}
                placeholder='Complemento' style={[styles.input]}
                autoCapitalize='none' />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="map-marker" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.state}
                onChangeText={state => this.setState({ state })}
                placeholder='Estado' style={[styles.input]}
                autoCapitalize='none' />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="map-marker" size={15} color="#3CAD4C" />
              <TextInput
                value={this.state.city}
                onChangeText={city => this.setState({ city })}
                placeholder='Cidade' style={[styles.input]}
                autoCapitalize='none' />
            </View>

            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('App')} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}> */}
            <TouchableOpacity onPress={() => this.resgisterCompany()} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}>
              <Text style={[styles.textBtn, { color: '#FFFFFF' }]}>Enviar Endereço</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>


      // </SafeAreaView>
    );
  }
}
