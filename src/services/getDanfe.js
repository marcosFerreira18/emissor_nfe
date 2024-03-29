import api from './api';
export const TOKEN_KEY = "@UserData";
import AsyncStorage from '@react-native-community/async-storage';


export const getDanfe = async (id) => {
    let data = await AsyncStorage.getItem(TOKEN_KEY);
    api.defaults.headers.common['token'] = JSON.parse(data).token
    return await api.get('nfe/emission/'+id, {})
        .then(({ data }) => {
            console.log(data)
            return data.data
        }).catch((error) => {
            console.log(error.response);
        });
}