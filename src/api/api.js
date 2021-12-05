import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_API_KEY;//-
const KEY1 = process.env.REACT_APP_API_KEY1;//true
const KEY2 = process.env.REACT_APP_API_KEY2;//-

export const instance = axios.create({
    baseURL: URL,
    params: {
        key: KEY,
        regionCode: 'UA',
        maxResults: 12,
    },
});
