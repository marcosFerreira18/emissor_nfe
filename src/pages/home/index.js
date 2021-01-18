import React, { Component } from 'react';

import { View, SafeAreaView, Text, Image, FlatList, TouchableOpacity, Alert, Dimensions } from 'react-native';
import iconNfe from '../../img/iconNfe.png'
import iconClients from '../../img/icon_clients.png'
import iconProducts from '../../img/icon_product.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';
const TOKEN_KEY = "@UserData";

import { loadHome } from '../../services/home';

const { height, width } = Dimensions.get('window');
import { styles, footerMenu, cardEmission } from './styles.js'

import LinearGradient from 'react-native-linear-gradient';

function Item({ name, img_link, date, price, openDanfe }) {
    return (
        <LinearGradient
            colors={['#FFF', '#E5E7E5']} style={cardEmission.container}>
            <Image source={{ uri: img_link }} style={cardEmission.clientImage} />
            <View style={cardEmission.nfeInfo}>
                <Text style={cardEmission.clientName}>{name}</Text>
                <Text style={cardEmission.date}>{date}</Text>
                <Text style={cardEmission.price}>{price}</Text>
            </View>
        </LinearGradient>
    );
}


function Separator() {
    return (
        <View style={{ height: 10, width }} />
    )
}

export default class Home extends Component {

    state = {
        data: null

    };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTransparent: true,
        }
    }

    async componentDidMount() {
        this.setState({ data: await loadHome() })

        // console.log(this.state.data.emissions)
        // console.log('Dados Home: ', this.state.data.company)
    }



    emitirNota = async () => {
        Alert.alert(
            'Sucesso',
            'A NFe foi emitida corretamente',
            [
                { text: 'Ver Danfe', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Ok',
                    onPress: () => this.props.navigation.navigate('WebView'),
                    style: 'cancel',
                },

            ],
            { cancelable: false },
        );
    }

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth")
    }

    exibirDanfe = (item) => {
        console.log(item)
        this.props.navigation.navigate('WebView', { id: item.id })
    }

    atualizar = () => {
        this.componentDidMount();
    }

    render() {
        return (
            this.state.data != null ?
                <SafeAreaView>
                    <View style={styles.containerTop}>
                        <View style={styles.infoEmpresa} >
                            <Image source={{ uri: this.state.data.company.img_capa }} style={styles.imgEmpresa} blurRadius={2} />
                            {/* <View style={styles.imgEmpresaContainer} /> */}
                            <View>
                                <Text style={styles.nomeEmpresa}>Olá,</Text>
                                <Text style={styles.nomeUser} >{this.state.data.user.name}</Text>
                                <Text style={styles.nomeEmpresa}>{this.state.data.company.name}</Text>
                                <TouchableOpacity onPress={() => this.logOut()}>
                                    <Text>SAIR</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => this.atualizar()}>
                                {/* <Text>ATUALIZAR</Text> */}
                                <Icon name="refresh" size={30} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerStats}>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsTitle}>
                                    faturamento
                            </Text>
                                <Text style={styles.statsContent}>
                                    {this.state.data.stats.billing}
                                </Text>
                            </View>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsTitle}>
                                    emissões
                            </Text>
                                <Text style={styles.statsContent}>
                                    {this.state.data.stats.emissions}
                                </Text>
                            </View>
                        </View>

                    <LinearGradient
                        colors={['#FFF', '#E5E7E5']}
                        style={[styles.containerHome]}
                    >
                       
                        {
                            this.state.data != null ?

                                <FlatList
                                    data={this.state.data.emissions}
                                    contentContainerStyle={{ paddingBottom: 5, paddingTop: 0, marginTop:-10 }}
                                    ItemSeparatorComponent={Separator}
                                    renderItem={({ item }) =>
                                        <TouchableOpacity onPress={() => this.exibirDanfe(item)}>
                                            <Item img_link={item.client.img_link} name={item.client.name} price={item.nfe.total} date={item.nfe.datetime} />
                                        </TouchableOpacity>
                                    }
                                    keyExtractor={item => item.id}
                                />
                                :
                                null
                        }

                        {/* <TouchableOpacity >
                            <Text>
                                Cadastrar Certificado
                            </Text>
                        </TouchableOpacity> */}
                        <View style={footerMenu.container}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Emitter')} style={footerMenu.nfeBtn}>
                                <Image source={iconNfe} style={footerMenu.iconNfe} />
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')} style={{ alignItems: "center" }}>
                                <Image source={iconProducts} style={footerMenu.iconMenu} />
                                <Text>Produtos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Clientes')} style={{ alignItems: "center" }}>
                                <Image source={iconClients} style={footerMenu.iconMenu} />
                                <Text>Clientes</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>

                </SafeAreaView >
                :
                null
        );
    }
}
