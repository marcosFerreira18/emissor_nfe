import React, { Component } from 'react';

import { View, ScrollView, Text, TouchableOpacity, Dimensions, FlatList, Picker, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

import { clientContent, productContent, nfeContent, cardProduct } from './styles';

import { listProducts } from '../../services/product';
import { listClients } from '../../services/clients';
import { emitirNota } from '../../services/emitter';
import IconM from 'react-native-vector-icons/MaterialIcons';

function Item({ title, price, un, index, qtd, label_price, delete_prod }) {
    return (
        <View style={cardProduct.container}>
            <View style={cardProduct.productInfo}>
                <Text numberOfLines={1} style={cardProduct.itemProductInfo}>{index}</Text>
                <Text numberOfLines={1} style={cardProduct.itemProductName}>{title}</Text>
                <Text numberOfLines={1} style={cardProduct.itemProductInfo}>{qtd}</Text>
                <Text numberOfLines={1} style={cardProduct.itemProductInfo}>{un}</Text>
                <Text numberOfLines={1} style={cardProduct.itemProductInfo}>{label_price}</Text>
                <Text numberOfLines={1} style={cardProduct.itemProductInfo}>{qtd * price}</Text>

                <TouchableOpacity onPress={() => delete_prod(index)} style={cardProduct.btnDelete}>
                    <IconM name={'delete'} size={15} color="#EFFAFB" />
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default class Product extends Component {
    static navigationOptions = {
        title: 'Emitir NF-e',
    };
    state = {
        showLoading: false,
        clients: [],
        products: [],
        selectedClient: null,
        selectedProduct: null,
        selectedProducts: [],
        qtdCurrent: '',
        totalCurrent: '0,00',
    }

    async componentDidMount() {
        this.setState({ clients: await listClients() })
        this.setState({ products: await listProducts() })
    }

    addProd = async (newProd) => {
        if (parseInt(this.state.qtdCurrent) > 0) {
            newProd.amount = this.state.qtdCurrent;
            newProd.product_id = newProd.id;
            newProd.price = parseFloat(this.state.price.replace(",", "."));
            await this.setState({ selectedProducts: [...this.state.selectedProducts, newProd], qtdCurrent: '' })
            console.log(this.state.selectedProducts)
            this.calcTotal()
            console.log(this.state.totalCurrent)
        }
    }

    deleteProd = async (idProd) => {

        await this.setState({
            selectedProducts: this.state.selectedProducts.filter(function (product) {
                return product.id !== idProd;
            })
        })
        this.calcTotal()
        console.log(this.state.totalCurrent)
    }

    calcTotal = () => {
        this.setState({
            totalCurrent: this.state.selectedProducts.reduce((sum, product) => {
                return sum + (product.amount * product.price);
            }, 0)
        })
    }

    getDataToEmitter = async () => {
        let finalData = []
        await this.state.selectedProducts.forEach((el) => {
            let obj = { product_id: el.product_id.toString(), amount: el.amount, price: el.price }
            finalData.push(obj)
        })

        return finalData
    }

    // emitirNota = () => {
    //     emitirNota({ client_id: this.state.selectedClient.id.toString(), products: await this.getDataToEmitter() })
    //         .then((data) => {
    //              this.props.navigation.navigate()
    //              this.props.navigation.navigate('WebView', { id: data.id })
    //         })
    // }

    exibirDanfe = (item) => {
        // console.log(item)
        this.props.navigation.navigate('WebView', { danfe: item.danfe })
    }

    render() {
        return (
            <LinearGradient
                colors={['#FFF', '#E4EDFF']}
                style={{ width: '100%', height, alignItems: 'center', justifyContent: 'space-between' }}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={clientContent.container}>
                        <Text style={clientContent.title}>Informações do cliente</Text>
                        <View style={clientContent.slectClient}>
                            <View style={{ height: 50, justifyContent: "space-evenly", width: width * .8, paddingTop: 10 }}>
                                <Text style={clientContent.selectLabel}>
                                    Cliente
                                </Text>
                                <Picker
                                    selectedValue={this.state.selectedClient}
                                    style={{ height: 50, width: '100%', color: '#FFF' }}

                                    onValueChange={(client, itemIndex) =>
                                        this.setState({ selectedClient: client })
                                    }>
                                    <Picker.Item label={'Selecione um cliente'} value={null} />
                                    {
                                        this.state.clients.map((item, index) => {
                                            return (<Picker.Item label={item.full_name} value={item} />)
                                        })
                                    }

                                </Picker>
                            </View>
                            {/* <IconM name={'arrow-drop-down'} size={40} color="#C4C4C4" / */}
                        </View>

                        <View style={clientContent.infoClient}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={clientContent.clientName}>
                                    <Text style={clientContent.nameLabel}>
                                        Nome / Razão Social
                                    </Text>
                                    <Text style={clientContent.nameValue}>
                                        {this.state.selectedClient ? this.state.selectedClient.full_name : ' - '}
                                    </Text>
                                </View>

                                <View style={clientContent.clientID}>
                                    <Text style={clientContent.nameLabel}>
                                        CPF / CNPJ
                                    </Text>
                                    <Text style={clientContent.idValue}>
                                        {this.state.selectedClient ? this.state.selectedClient.cpf : ' - '}
                                    </Text>
                                </View>
                            </View>

                            <View style={clientContent.clientAddress}>
                                <Text style={clientContent.nameLabel}>
                                    Endereço
                                </Text>
                                <Text style={clientContent.addressValue}>
                                    29.048-195 - Rua Sebastião Costa  141  Vitória  Joana D'arc  ES  Brasil  Escritório
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={productContent.container}>
                        <Text style={productContent.title}>Produtos</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <View style={productContent.slectProduct}>
                                    <View style={{ height: 50, justifyContent: "space-evenly", width: width * .65, paddingTop: 10 }}>
                                        <Text style={productContent.selectLabel}>
                                            Produto
                                    </Text>
                                        <Picker
                                            selectedValue={this.state.selectedProduct}
                                            style={{ height: 50, width: '100%', color: '#FFF' }}

                                            onValueChange={(selectedProduct, itemIndex) =>
                                                this.setState({ selectedProduct })
                                            }>

                                            {
                                                this.state.products.map((item, index) => {
                                                    return (<Picker.Item label={item.name} value={item} />)
                                                })
                                            }

                                        </Picker>
                                    </View>
                                    {/* <IconM name={'arrow-drop-down'} size={40} color="#C4C4C4" /> */}
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10 }}>

                                    <View style={productContent.qtd}>
                                        <Text style={productContent.selectLabel}>
                                            Quantidade
                                        </Text>
                                        <TextInput
                                            style={productContent.selectValue}
                                            value={this.state.qtdCurrent}
                                            onChangeText={qtdCurrent => this.setState({ qtdCurrent })}
                                            placeholder={'0'}
                                            keyboardType={'numeric'}
                                        />
                                    </View>
                                    <View style={productContent.un}>
                                        <Text style={productContent.selectLabel}>
                                            Unidade
                                        </Text>
                                        <Text style={productContent.selectValue}>
                                            {this.state.selectedProduct ? this.state.selectedProduct.unit : ' - '}
                                        </Text>
                                    </View>
                                    <View style={productContent.pn}>
                                        <Text style={productContent.selectLabel}>
                                            Preço Unitário
                                        </Text>
                                        <TextInput
                                            style={productContent.selectValue}
                                            value={this.state.price}
                                            onChangeText={price => this.setState({ price })}
                                            placeholder={'0,00'}
                                            keyboardType={'numeric'}
                                        />
                                    </View>
                                </View>

                            </View>

                            <TouchableOpacity
                                disabled={this.state.selectedProducts.length > 0}
                                onPress={() => this.addProd(this.state.selectedProduct)}
                                style={[productContent.btnAdd, { borderColor: this.state.selectedProducts.length > 0 ? "#DDD" : "#3CAD4C" }]}

                            >
                                <IconM name={'add'} size={50} color={this.state.selectedProducts.length > 0 ? "#DDD" : "#3CAD4C"} />
                            </TouchableOpacity>
                        </View>


                        <FlatList
                            data={this.state.selectedProducts}
                            style={{ width, marginTop: 20 }}
                            renderItem={({ item }) => <Item delete_prod={this.deleteProd} title={item.name} qtd={item.amount} price={item.price} un={item.unit} index={item.id} label_price={item.label_price} />}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={nfeContent.container}>
                        <View style={{ width: width - 40, alignItems: "flex-end" }}>
                            <Text style={nfeContent.totalInfo}>
                                Total
                        </Text>
                            <Text style={nfeContent.totalPrice}>
                                R$ {this.state.totalCurrent}
                            </Text>

                        </View>
                        <TouchableOpacity
                            onPress={
                                async () => {

                                    this.setState({ showLoading: true })
                                    emitirNota(
                                        {
                                            client_id: this.state.selectedClient.id.toString(),
                                            products: await this.getDataToEmitter()
                                        }
                                    ).then((item) => {
                                        // console.log("SUA NOTA EMITIDA COM SUCESSO: ", item)

                                        this.setState({ showLoading: false })
                                        this.exibirDanfe(item)
                                    })
                                }
                            }
                            style={nfeContent.btnEmitter}>
                            <Text style={nfeContent.txtBtn}>
                                Emitir NF-e
                            </Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
                <Modal show={this.state.showLoading} />
            </LinearGradient>
        );
    }
}


const Modal = ({ show = false }) => {

    return show ?
        (
            <View style={{ width, height, justifyContent: "center", alignItems: "center", backgroundColor: "#111111BB", position: "absolute" }}>
                <Text style={{ fontSize: 28, fontWeight: "bold", color: "#FFF" }}>
                    Emitindo Nota...
                </Text>
            </View>
        )
        : null
}