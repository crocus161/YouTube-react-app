import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
    baseURL: URL,
    params: {
        key: KEY
    }
});
