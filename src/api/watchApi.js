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

const getRelatedVideoData = (videoId='', pageToken='') => {
    const params = {
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video',
        pageToken
    }

    return instance
    .get('search', { params })
    .then(response => response.data);
}

const getCommentsData = (videoId='') => {
    const params = {
        part: 'snippet,replies',
        videoId
    }

    return instance
    .get('commentThreads', { params })
    .then(response => response.data);
}

export const watchApi = { getWatchVideoData, getRelatedVideoData, getCommentsData };