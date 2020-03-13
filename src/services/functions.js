import api from './api';


export const emitir = async ({ valor, qtd }) => {
    return await api.post('/emitir', {
        valor, qtd
    }).then(({ data }) => {
        return data
    }).catch((error) => {
        console.log(error.response.data);
    });
}