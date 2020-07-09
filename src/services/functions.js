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

export const getEndereco = async (cep) => {
    return await fetch('https://viacep.com.br/ws/' + cep.replace(/[^0-9]/g, '') + '/json/')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
        .catch((error) => {

            return {
                cep: '',
                logradouro: '',
                bairro: '',
                localidade: '',
                uf: '',
            }
        });
}