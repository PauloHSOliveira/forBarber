import axios from 'axios';

const api = axios.create({
    baseURL: 'http://198.162.1.104:3000',
});

export default api;
