import { instance } from './api';


const getCommentsData = (videoId='', pageToken='') => {
    const params = {
        part: 'snippet', videoId, pageToken
    }

    return instance
    .get('commentThreads', { params })
    .then(response => response.data);
}

const addComment = (accessToken, accessTokenType, videoId, text) => {
    console.log(accessToken, accessTokenType, videoId, text)
    const obj = {
        snippet: {
            videoId,
            topLevelComment: { snippet: { textOriginal: text } }
        }
    }

    return instance
    .post('commentThreads', obj, {
        params: { part: 'snippet' },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    });
}

export const commentApi = { getCommentsData, addComment };