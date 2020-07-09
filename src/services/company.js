import api from './api';
export const TOKEN_KEY = "@UserData";
import AsyncStorage from '@react-native-community/async-storage';

export const resgisterCompany = async (data) => {
    console.log(data)
    return await api.post('/company/', data)
        .then(({ data }) => {
            console.log(data)
            return {
                msg: 'Produtor registrado com sucesso.',
                data: data.data,
                status: 1
            }
        }).catch((error) => {
            return { msg: 'Ocorreu um erro tente novamente mais tarde.', status: 0 }

        });
}

export const resgisterAddressCompany = async (data) => {
    // console.log(data)
    return await api.post('/company/' + data.id + '/address/', data)
        .then(({ data }) => {
            console.log(data)
            return data
        }).catch((error) => {
            return { msg: 'Ocorreu um erro tente novamente mais tarde.', status: 0 }

        });
}

export const sendCertificate = async (certificate, password) => {
    let data = await AsyncStorage.getItem(TOKEN_KEY);
    api.defaults.headers.common['token'] = JSON.parse(data).token
    console.log(certificate)
    return await api.post('/certificate/', { certificate, password })
        .then(({ data }) => {
            console.log(data)
            return data
        }).catch((error) => {
            console.log(error.response.data);
        });

}