import axios from 'axios';
// baseURL: 'http://3.132.86.252:5000/api/v0',
const api = axios.create({
    baseURL: 'http://www.produtorlegal.com.br/api/v0',
    timeout: 1000,
})

export default api;