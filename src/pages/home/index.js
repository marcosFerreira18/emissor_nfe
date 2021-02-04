import React, {Component, useContext, useEffect} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import iconNfe from '../../img/iconNfe.png';
import iconClients from '../../img/icon_clients.png';
import iconProducts from '../../img/icon_product.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';
// const TOKEN_KEY = '@UserData';

// import {loadHome} from '../../services/home';
import EmmiterContext from '../emmiter2/emmiterContext';

// const {height, width} = Dimensions.get('window');
import {styles, footerMenu, cardEmission} from './styles.js';

import LinearGradient from 'react-native-linear-gradient';

// function Item({name, img_link, date, price, openDanfe}) {
//   return (
//     <LinearGradient colors={['#FFF', '#E5E7E5']} style={cardEmission.container}>
//       <Image source={{uri: img_link}} style={cardEmission.clientImage} />
//       <View style={cardEmission.nfeInfo}>
//         <Text style={cardEmission.clientName}>{name}</Text>
//         <Text style={cardEmission.date}>{date}</Text>
//         <Text style={cardEmission.price}>{price}</Text>
//       </View>
//     </LinearGradient>
//   );
// }

const HOMEFunction = ({navigation}) => {
  const {homeLoaded, dataHome, runrun} = useContext(EmmiterContext);

  useEffect(() => {
    console.log('HAHAH',dataHome);
    if(!homeLoaded){
      runrun()
    }
  }, []);


  logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  atualizar = () => {
    alert('a');
  };

  return homeLoaded ? (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>

      {/* <Text>aaaa</Text> */}
       <View>
        <View style={styles.containerTop}>
          <View style={styles.infoEmpresa}>
            <View>
              <Text style={styles.nomeEmpresa}>Olá,</Text>
              <Text style={styles.nomeUser}>{dataHome.user.name}</Text>
              <Text style={styles.nomeEmpresa}>{dataHome.company.name}</Text>
            </View>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => {
                Alert.alert(
                  'Atenção',
                  'Deseja realmente sair do applicativo?',
                  [
                    {
                      text: 'Sim',
                      onPress: () => logOut(),
                      style: 'cancel',
                    },
                    {text: 'Cancelar', onPress: console.log('abort')},
                  ],
                );
              }}>
              <Text style={{fontSize: 11}}>ENCERRAR SESSAO</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{uri: dataHome.company.img_capa}}
            style={styles.imgEmpresa}
          />
        </View>
        <View style={styles.containerStats}>
          <View style={styles.statsItem}>
            <Text style={styles.statsTitle}>Faturamento</Text>
            <Text style={styles.statsContent}>{dataHome.stats.billing}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListDanfs');
            }}
            style={styles.statsItem}>
            <Text style={styles.statsTitle}>Notas Emitidas</Text>
            <Text style={styles.statsContent}>{dataHome.stats.emissions}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={footerMenu.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Emitter')}
          style={footerMenu.nfeBtn}>
          <Image source={iconNfe} style={footerMenu.iconNfe} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Product')}
          style={{alignItems: 'center'}}>
          <Image source={iconProducts} style={footerMenu.iconMenu} />
          <Text>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Clientes')}
          style={{alignItems: 'center'}}>
          <Image source={iconClients} style={footerMenu.iconMenu} />
          <Text>Clientes</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  ) : <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Buscandos Dados...</Text></SafeAreaView>;
};

HOMEFunction['navigationOptions'] = screenProps => ({
  headerTransparent: true,
});

export default HOMEFunction;
