// import api from './api';
// import { decode as atob, encode } from 'base-64'

// export const login = async (username, password) => {
//     // console.log('Sending')

//     api.defaults.headers.common['Authorization'] = 'Basic ' + encode(username + ':' + password);
//     console.log(encode(encode(username + ':' + password)))
//     return await api.post('/token/', {})
//         .then(({ data }) => {
//             console.log(data)
//             return data
//         }).catch((error) => {
//             console.log(error.response.data);
//         });
// }

import api from '../providers/api';
import {encode} from 'base-64';

export const login = async (username, password) => {
  console.log(`Sending ${username}`);
  api.defaults.headers.common['Authorization'] =
    'Basic ' + encode(username + ':' + password);
  console.log('Basic ' + encode(username + ':' + password));
  delete api.defaults.headers.common['token'];
  return await api
    .post('/token/', {})
    .then(async ({data}) => {
      console.log('LOGINAAA', data.data.token);
      api.defaults.headers.common['token'] = data.token;
      return data;
    })
    .catch(error => {
      console.log(error.response);
    });
};
