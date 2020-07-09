import React, { Component } from 'react';

import { View, FlatList, Text, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

import { listProducts } from '../../services/product';


function Item({ title, price, un, img_link }) {
    return (
        <View style={cardProduct.container}>
            <Image source={{ uri: img_link }} style={cardProduct.imgProduct} />
            <View style={cardProduct.productInfo}>
                <Text style={cardProduct.productName}>{title}</Text>
                <Text style={cardProduct.productPrice}>{price}/{un}</Text>
            </View>
        </View>

    );
}

import { cardProduct } from './styles';

export default class Product extends Component {
    static navigationOptions = {
        title: 'Meus produtos',
    };
    state = {
        products: []
    }

    async componentDidMount() {
        // console.log()
        this.setState({ products: await listProducts() })
    }

    render() {
        return (
            <LinearGradient
                colors={['#FFF', '#E4EDFF']}
                style={{ width: '100%', height, alignItems: 'center', justifyContent: 'space-around' }}>

                <FlatList
                    data={this.state.products}
                    style={{ width, height}}
                    renderItem={({ item }) => <Item title={item.name} price={item.price} un={item.unit} img_link={item.img_link} />}
                    keyExtractor={item => item.id}
                />

            </LinearGradient>
        );
    }
}
