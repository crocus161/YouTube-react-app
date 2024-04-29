import axios from 'axios';

const URL = import.meta.env.VITE_APP_API_URL;
const KEY = import.meta.env.VITE_APP_API_KEY;
const KEY1 = import.meta.env.VITE_APP_API_KEY1;
const KEY2 = import.meta.env.VITE_APP_API_KEY2;

export const instance = axios.create({
    baseURL: URL,
    params: {
        key: KEY,
        regionCode: 'UA',
        maxResults: 12,
    },
});
