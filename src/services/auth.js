import api from './api';
import { decode as atob, encode } from 'base-64'

export const login = async (username, password) => {
    // console.log('Sending')

    api.defaults.headers.common['Authorization'] = 'Basic ' + encode(username + ':' + password);
    console.log(encode(encode(username + ':' + password)))
    return await api.post('/token', {})
        .then(({ data }) => {
            console.log(data)
            return data
        }).catch((error) => {
            console.log(error.response.data);
        });
}