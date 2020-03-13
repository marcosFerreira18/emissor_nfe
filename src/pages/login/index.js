import React, { Component } from 'react';

import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import { login } from '../../services/auth';

import { styles } from './styles.js'
import logo from '../../img/logo_pl.png'
import bg from '../../img/bg_pl.png'
const TOKEN_KEY = "@UserData";
export default class Login extends Component {

  state = {
    password: '',
    username: ''
  }

  static navigationOptions = {
    headerTransparent: true
  }

  logar = async () => {
    await login(this.state.username, this.state.password)
      .then(dataUser => {

        if (dataUser.data.token) {
          AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(dataUser.data))
            .then(() => this.props.navigation.navigate('Home'))
        }
        console.log(dataUser.data.token);
      })
  }

  render() {
    return (
      // <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <ImageBackground source={bg} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
        <LinearGradient
          colors={['#FFF', '#FFF', '#FFF1']}
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
          <KeyboardAvoidingView style={{ alignItems: 'center', }}>


            <Image source={logo} />

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={styles.inputContainer}>
                <Icon name="envelope" size={30} color="#3CAD4C" />
                <TextInput
                  onChangeText={username => this.setState({ username })}
                  placeholder='user.usuario' style={[styles.input]}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="unlock" size={30} color="#3CAD4C" />
                <TextInput
                  onChangeText={password => this.setState({ password })}
                  placeholder='senha' secureTextEntry style={[styles.input]}
                  autoCapitalize='none' />
              </View>


              {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('App')} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}> */}
              <TouchableOpacity onPress={() => this.logar()} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}>
                <Text style={[styles.textBtn, { color: '#FFFFFF' }]}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btn, { backgroundColor: '#FFF', }]}>
                <Text style={[styles.textBtn, { color: '#3CAD4C' }]}>Crie sua conta</Text>
              </TouchableOpacity>
            </View>

          </KeyboardAvoidingView>
          <View>
            <TouchableOpacity style={{ borderBottomWidth: 2 }}>
              <Text>Recuperar minha senha</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>


      // </SafeAreaView>
    );
  }
}