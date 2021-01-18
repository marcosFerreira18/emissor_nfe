import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';

import {emitirNota} from '../../services/emitter';
const EmmiterContext = createContext({});

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

  async function EmitirNFE() {
    // Alert.alert('EMITINDO NOTA');

    emitirNota({
      client_id: client.id,
      products: [
        {
          product_id: product.id,
          amount: price,
          price: price,
        },
      ],
    }).then(item => {
      console.log('SUA NOTA EMITIDA COM SUCESSO: ', item);

      //   this.setState({showLoading: false});
      //   this.exibirDanfe();
    });
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
      }}>
      {children}
    </EmmiterContext.Provider>
  );
};

export default EmmiterContext;
