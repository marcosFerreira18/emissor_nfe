import api from './api';
export const TOKEN_KEY = "@UserData";
import AsyncStorage from '@react-native-community/async-storage';


export const listProducts = async () => {
    let data = await AsyncStorage.getItem(TOKEN_KEY);

    // console.log(JSON.parse(data).token)
    api.defaults.headers.common['token'] = JSON.parse(data).token
    return await api.get('/products', {})
        .then(({ data }) => {
            // console.log(data)
            return data.data
        }).catch((error) => {
            console.log(error.response.data);
        });
}