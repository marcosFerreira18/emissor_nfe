import axios from 'axios';
const baseURL = 'https://api.produtorlegal.com.br/api/v0';
const api = axios.create({
    // baseURL: 'https://6f1ed629cd7b.ngrok.io/api/v0',
    baseURL
})

export default api;