import { instance } from './api';

const getLikeVideos = (accessToken, accessTokenType, pageToken='') => {
    return instance
    .get('videos', {
        params: {
            part: 'snippet,contentDetails,statistics',
            myRating: 'like',
            pageToken
        },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    })
    .then(response => response.data);
}

const rateVideo = (accessToken, accessTokenType, videoId, type) => {
    return instance
    .post('videos/rate', null, {
        params: {
            id: videoId,
            rating: type
        },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    })
    .then(response => response);
}

const getRating = (accessToken, accessTokenType, videoId) => {
    return instance
    .get('videos/getRating', {
        params: { id: videoId },
        headers: { Authorization: `${accessTokenType} ${accessToken}`}
    })
    .then(response => response.data.items[0].rating);
}

export const likeApi = { getLikeVideos, rateVideo, getRating };