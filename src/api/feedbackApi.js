import axios from 'axios';

const URL = import.meta.env.VITE_APP_TELEGRAM_URL,
    ID = import.meta.env.VITE_APP_TELEGRAM_ID,
    TOKEN = import.meta.env.VITE_APP_TELEGRAM_TOKEN;

const postFeedback = (message) => {
    return axios
    .get(`${URL}${TOKEN}/sendMessage?chat_id=${ID}&text=${message}`)
    .then(response => response.data);
}


export const feedbackApi = { postFeedback };