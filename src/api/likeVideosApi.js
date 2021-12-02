import { instance } from './api';

const getLikeVideos = (accessToken, accessTokenType, pageToken='') => {
    return instance
    .get('videos', {
        params: {
            part: 'snippet,contentDetails,statistics',
            myRating: 'like',
            pageToken
        },
        headers: {
            Authorization: `${accessTokenType} ${accessToken}`
        }
    }).then(response => response.data);
}

export const likeVideosApi = { getLikeVideos };