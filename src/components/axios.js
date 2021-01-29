import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://movies-b8a5f-default-rtdb.firebaseio.com/'
});

export default instance;