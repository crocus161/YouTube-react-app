import { instance } from './api';

const getSubscribesChannel = (accessToken, accessTokenType, pageToken='') => {

    return instance
    .get('subscriptions', {
        params: {
            part: 'snippet,contentDetails,subscriberSnippet',
            mine: true,
            pageToken
        },
        headers: {
            Authorization: `${accessTokenType} ${accessToken}`
        }
    })
    .then(response => response.data)
}

export const subscribesApi = { getSubscribesChannel };

