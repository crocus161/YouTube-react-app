import { instance } from './api';

const getExploreVideoData = (pageToken) => {
    const params = { 
        part: 'snippet',
        relatedToVideoId: 'Ks-_Mh1QhMc',
        type: 'video',
        pageToken
    }

    return instance
    .get('search', { params })
    .then(response => response.data);
}


export const exploreApi = { getExploreVideoData };