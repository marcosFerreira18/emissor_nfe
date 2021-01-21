import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const TOKEN_KEY = '@UserData';
import {Platform} from 'react-native';

const baseURL = 'https://api.produtorlegal.com.br/api/v0';
// const api = axios.create({
//   // baseURL: 'https://6f1ed629cd7b.ngrok.io/api/v0',
//   baseURL,
//   timeout: 1000,
// });

// export default api;

const token = async () => {
  try {
    let dataUser = await AsyncStorage.getItem(TOKEN_KEY);
    let token = JSON.parse(dataUser).token;
    return token;
  } catch (e) {}
};

class Axios {
  constructor() {
    return axios.create({
      baseURL,
      timeout: 1000,
    });
  }
}

class Api extends Axios {
  constructor() {
    super();
    this.loadConfig();
  }

  loadConfig = async () => {
      console.log('CONFIIIG')
    // this.defaults.headers.common['token'] = await token();
    // this.defaults.headers.common['OS'] = Platform.OS;

    // console.debug(await fire_token(), 'asd');
  };
}

export default api = new Api();