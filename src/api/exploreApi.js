import { instance } from './api';

const getExploreVideoData = (pageToken) => {
    const params = { 
        part: 'snippet',
        q: 'ted talks',
        type: 'video',
        pageToken
    }

    return instance
    .get('search', { params })
    .then(response => response.data);
}


export const exploreApi = { getExploreVideoData };