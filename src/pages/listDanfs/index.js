import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import {loadHome} from '../../services/home';

import LinearGradient from 'react-native-linear-gradient';
import {cardEmission} from '../home/styles';
const {height, width} = Dimensions.get('window');

function Item({name, img_link, date, price, openDanfe}) {
  return (
    <LinearGradient colors={['#FFF', '#E5E7E5']} style={cardEmission.container}>
      <Image source={{uri: img_link}} style={cardEmission.clientImage} />
      <View style={cardEmission.nfeInfo}>
        <Text style={cardEmission.clientName}>{name}</Text>
        <Text style={cardEmission.date}>{date}</Text>
        <Text style={cardEmission.price}>{price}</Text>
      </View>
    </LinearGradient>
  );
}

function Separator() {
  return <View style={{height: 10, width}} />;
}

const listDanfs = ({navigation}) => {
  const [danfes, setDanfes] = useState([]);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    loadHome().then(({emissions}) => setDanfes(emissions));
  });

  function exibirDanfe(item) {
    navigation.navigate('WebView', {id: item.id});
  }

  return (
    <SafeAreaView style={{paddingVertical: 20}}>
      <FlatList
        data={danfes}
        contentContainerStyle={{
          paddingBottom: 5,
          paddingTop: 0,
          marginTop: -10,
        }}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => exibirDanfe(item)}>
            <Item
              img_link={item.client.img_link}
              name={item.client.name}
              price={item.nfe.total}
              date={item.nfe.datetime}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default listDanfs;
