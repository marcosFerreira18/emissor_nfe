import React, {createContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {emitirNota} from '../../services/emitter';
const EmmiterContext = createContext({});
import {loadHome} from '../../services/home';

export const EmmiterProvider = ({children}) => {
  const [product, setProduct] = useState({
    id: 0,
    name: 'Selecione um produto',
  });
  const [client, setClient] = useState({
    id: 0,
    full_name: 'Selecione um cliente',
  });
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const [danfes, setDanfes] = useState([]);
  const [dataHome, setDataHome] = useState({});
  const [homeLoaded, setHomeLoaded] = useState(false);

  async function runrun() {
    await loadHome().then(data => {
      console.log('LOOOAD HOME', data.user);
      setDataHome(data);
      setDanfes(data.emissions);
    });

    setHomeLoaded(true);
  }

  useEffect(() => {
    runrun();
  }, []);

  async function EmitirNFE(navigation) {
    if (product.id > 0 && client.id > 0 && price > 0 && quantity > 0) {
      Alert.alert('Atenção', 'Você deseja realmente esmitir essa nota?', [
        {
          text: 'Cancelar',
          onPress: () => {
            console.log('Cancel Pressed');
            return false;
          },
          style: 'cancel',
        },
        {
          text: 'Sim, Emitir',
          onPress: () => {
            emitirNota({
              client_id: client.id,
              products: [
                {
                  product_id: product.id,
                  amount: quantity,
                  price: parseFloat(price / 100),
                },
              ],
            }).then(item => {
              if (!item) {
                Alert.alert('Erro: Tente novamente mais tarde.');
                // return false;
              } else {
                navigation.goBack();
                navigation.navigate('WebView', {id: item.id});
                setProduct({
                  id: 0,
                  name: 'Selecione um produto',
                });
                setClient({
                  id: 0,
                  full_name: 'Selecione um cliente',
                });
                setQuantity(0);
                setPrice(0);
                runrun();
                // return item;
                //   this.setState({vshowLoading: false});
                //   this.exibirDanfe();
              }
            });
          },
        },
      ]);
    } else {
      Alert.alert('Confira se todos os campos estão preenchidos corretamente.');
    }
  }

  return (
    <EmmiterContext.Provider
      value={{
        product,
        setProduct,
        client,
        setClient,
        price,
        setPrice,
        setProduct,
        quantity,
        setQuantity,
        EmitirNFE,
        danfes,
        setDanfes,
        dataHome,
        setDataHome,
        setHomeLoaded,
        homeLoaded,
      }}>
      {children}
    </EmmiterContext.Provider>
  );
};

export default EmmiterContext;
