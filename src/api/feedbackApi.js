import axios from 'axios';

const URL = process.env.REACT_APP_TELEGRAM_URL,
    ID = process.env.REACT_APP_TELEGRAM_ID,
    TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;

const postFeedback = (message) => {
    return axios
    .get(`${URL}${TOKEN}/sendMessage?chat_id=${ID}&text=${message}`)
    .then(response => response.data);
}


export const feedbackApi = { postFeedback };