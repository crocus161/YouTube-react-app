import { instance } from './api';


const getChannelIcon = async (id) => {
    const params = { part: 'snippet', id }

    return instance
    .get('channels', { params })
    .then(response => response.data.items[0].snippet.thumbnails.default.url)
}

const getVideoDuration = (id) => {
    const params = { part: 'contentDetails,statistics', id }

    return instance
    .get('videos', { params })
    .then(response => response.data.items[0]?.contentDetails.duration);
}

export const cardsApi = {getChannelIcon, getVideoDuration}