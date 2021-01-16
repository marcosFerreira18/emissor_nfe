import React, { Component } from 'react';

import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import { resgisterCompany } from '../../services/company';

import { styles } from './styles.js'
// import logo from '../../img/logo_pl.png'
// import bg from '../../img/bg_pl.png'
// const TOKEN_KEY = "@UserData";
export default class Register extends Component {

  state = {
    fantasy_name: '',
    name: '',
    cnpj_cpf: '',
    ie: '',
    unit_type: '',
    email: '',
    telephone: '',
    environment_id: '2',
    tipo: '1',
    password: '',
    confirme_senha: '',
  }

  // state = {
  //   fantasy_name: '',
  //   name: 'Marcos Ferreira',
  //   cnpj_cpf: '14138810765',
  //   ie: '123456789',
  //   unit_type: 'Matriz',
  //   email: 'marcos.felipe.gf@gmail.com',
  //   telephone: '27996207525',
  //   environment_id: '2',
  //   tipo: '1',
  //   password: '123456',
  //   confirme_senha: '123456',
  // }

  static navigationOptions = {
    // headerTransparent: true
    title: "Cadastro de Produtor"
  }

  resgisterCompany = async () => {
    const result = await resgisterCompany(this.state)
    // const result = { status: 1 }

    if (result.status == 1) {
      this.props.navigation.navigate({ routeName: 'Address', params: { id: result.data.id } })
    } else {
      alert(result.msg)
    }

  }

  alterarTipo = (tipo) => {
    this.setState({ tipo })
  }

  render() {
    return (
      // <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <LinearGradient
        colors={['#FFF', '#FFF', '#FFF1']}
        style={{ width: '100%', height: '100%', alignItems: "flex-start", justifyContent: "flex-start", paddingHorizontal: 20, paddingTop: 40 }}>
        <KeyboardAvoidingView style={{}}>
          <ScrollView style={{ height: '100%' }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40, marginBottom: 20 }}>
              <TouchableOpacity
                onPress={() => this.alterarTipo('1')}
                style={[styles.option, this.state.tipo == '1' ? styles.optionSelected : null]}>
                <Text style={[styles.optionText, this.state.tipo == '1' ? styles.optionTextSelected : null]}>
                  Pessoa Física
            </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.alterarTipo('2')}
                style={[styles.option, this.state.tipo == '2' ? styles.optionSelected : null]}>
                <Text style={[styles.optionText, this.state.tipo == '2' ? styles.optionTextSelected : null]}>
                  Pessoa Jurídica
            </Text>
              </TouchableOpacity>
            </View>

            {/* <Image source={logo} /> */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {
                this.state.tipo == '2' ?
                  <View style={styles.inputContainer}>
                    <Icon name="building" size={15} color="#3CAD4C" />
                    <TextInput
                      value={this.state.fantasy_name}
                      onChangeText={fantasy_name => this.setState({ fantasy_name })}
                      placeholder='Nome Fantasia' style={[styles.input]}
                      autoCapitalize='none' />
                  </View>
                  : null
              }
              <View style={styles.inputContainer}>
                <Icon name="user" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                  placeholder={this.state.tipo == '2' ? 'Razão Social' : 'Nome Completo'} style={[styles.input]}
                  autoCapitalize='none' />
              </View>

              <View style={styles.inputContainer}>
                <Icon name="address-card" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.cnpj_cpf}
                  onChangeText={cnpj_cpf => this.setState({ cnpj_cpf })}
                  placeholder={this.state.tipo == '2' ? 'CNPJ' : 'CPF'} style={[styles.input]}
                  keyboardType={'numeric'}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="address-card" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.ie}
                  onChangeText={ie => this.setState({ ie })}
                  placeholder='Incrição Estadual' style={[styles.input]}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="phone" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.telephone}
                  onChangeText={telephone => this.setState({ telephone })}
                  placeholder='Telefone' style={[styles.input]}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="envelope" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder='E-mail' style={[styles.input]}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="unlock" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder='senha' secureTextEntry style={[styles.input]}
                  autoCapitalize='none' />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="unlock" size={15} color="#3CAD4C" />
                <TextInput
                  value={this.state.confirme_senha}
                  onChangeText={confirme_senha => this.setState({ confirme_senha })}
                  placeholder='confirme sua senha' secureTextEntry style={[styles.input]}
                  autoCapitalize='none' />
              </View>

              {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('App')} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}> */}
              <TouchableOpacity onPress={() => this.resgisterCompany()} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}>
                <Text style={[styles.textBtn, { color: '#FFFFFF' }]}>Próximo Passo</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>


      // </SafeAreaView>
    );
  }
}
