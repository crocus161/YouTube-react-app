import { instance } from './api';

const getChannelData = (channelId) => {
    const params = {
        part: 'snippet,contentDetails,statistics',
        id: channelId
    }

    return instance
    .get('channels', { params })
    .then(response => response.data.items[0]);
}

const getChannelVideos = (playlistId='', pageToken='') => {
    const params = {
        part: 'snippet,contentDetails',
        playlistId, pageToken
    }

    return instance
    .get('playlistItems', { params })
    .then(response => response.data);
}

export const channelApi = { getChannelData, getChannelVideos };