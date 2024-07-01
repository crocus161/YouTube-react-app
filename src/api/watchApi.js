import { instance } from './api';

const getWatchVideoData = (videoId) => {
    const params = { 
        part: 'snippet,contentDetails,statistics',
        id: videoId
    }

    return instance
    .get('videos', { params })
    .then(response => response.data.items[0]);
}

const getRelatedVideoData = (channelId='', pageToken='') => {
    const params = {
        part: 'snippet,contentDetails',
        playlistId: channelId.replace(/UC/, 'UU'),
        pageToken
    }

    return instance
      .get('playlistItems', { params })
      .then(response => response.data);
}

export const watchApi = { getWatchVideoData, getRelatedVideoData };