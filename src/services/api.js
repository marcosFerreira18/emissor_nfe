import axios from 'axios';
// baseURL: 'https://api.produtorlegal.com.br/api/v0',
const api = axios.create({
    baseURL: 'https://b99f44171d1c.ngrok.io/api/v0',
    timeout: 1000,
})

export default api;