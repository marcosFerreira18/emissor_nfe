import api from '../providers/api';

export const listClients = async () => {
   return await api.get('/client/', {})
        .then(({ data }) => {
            
            return data.data
        }).catch((error) => {
            console.log(error.response.data);
        });
}