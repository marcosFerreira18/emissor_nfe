import api from './api';
export const TOKEN_KEY = "@UserData";
import AsyncStorage from '@react-native-community/async-storage';


export const emitirNota = async (dados) => {
    let data = await AsyncStorage.getItem(TOKEN_KEY);
    // console.log(dados);
    // return dados
    api.defaults.headers.common['token'] = JSON.parse(data).token
    return await api.post('/nfe/emission/', dados)
        .then(({ data }) => {
            // console.log(data)
            // alert('Nota emitida com sucesso!')
            return data.data
        }).catch((error) => {
            console.log(error.response.data);
        });
}