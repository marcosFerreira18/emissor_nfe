import React, {useState, useEffect, useContext} from 'react';

import EmmiterContext from './emmiterContext';

import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

import {listProducts as getProducts} from '../../services/product';

const Item = ({item, setProduct, navigation}) => (
  <TouchableOpacity
    onPress={async () => {
      console.log('OOIIII',item)
      await setProduct(item);
      navigation.goBack();
    }}
    style={{padding: 20}}>
    <Text
      style={{
        marginTop: 10,
        width: width * 0.8,
        fontWeight: '300',
        fontSize: 20,
      }}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const listProducts = ({navigation}) => {
  const {setProduct} = useContext(EmmiterContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(products => {
      console.log(products);
      setProducts(products);
    });
  }, []);

  const renderItem = ({item}) => (
    <Item setProduct={setProduct} item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Você ainda não possui produtos cadastrados.</Text>
      )}
    </SafeAreaView>
  );
};

listProducts['navigationOptions'] = screenProps => ({
  title: 'Selecione um Produto',
});

export default listProducts;
