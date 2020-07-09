import React, { Component } from 'react';

import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles.js';

import { sendCertificate } from '../../services/company';


export default class Address extends Component {

    state = {
        certificate: {
            name: 'Selecione',
            path: ''
        },
        password: ''
    }

    static navigationOptions = {
        title: "Adicionar Certificado"
    }

    toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))

    getFile = async () => {
        // Pick a single file
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            this.setState({
                certificate: {
                    name: res.name,
                    path: res.uri
                }
            })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }

    }


    saveCertificate = async () => {
        await this.toDataURL(this.state.certificate.path)
            .then(dataUrl => {
                console.log(dataUrl)
                sendCertificate(dataUrl, this.state.password)

            })
    }

    render() {
        return (
            // <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <LinearGradient
                colors={['#FFF', '#FFF', '#FFF1']}
                style={{ width: '100%', height: '100%', alignItems: "flex-start", justifyContent: "flex-start", padding: 20, paddingTop: 40 }}>

                <TouchableOpacity onPress={() => this.getFile()} style={styles.inputContainer}>
                    <Icon name="expeditedssl" size={30} color="#3CAD4C" />
                    <Text style={[styles.input]}>
                        {this.state.certificate.name}
                    </Text>
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Icon name="unlock" size={30} color="#3CAD4C" />
                    <TextInput
                        onChangeText={password => this.setState({ password })}
                        placeholder='senha' secureTextEntry style={[styles.input]}
                        autoCapitalize='none' />
                </View>
                <TouchableOpacity onPress={() => this.saveCertificate()} style={[styles.btn, { backgroundColor: '#3CAD4C', }]}>
                    <Text style={[styles.textBtn, { color: '#FFFFFF' }]}>Enviar Certificado</Text>
                </TouchableOpacity>
            </LinearGradient>


            // </SafeAreaView>
        );
    }
}
