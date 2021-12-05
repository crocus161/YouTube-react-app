import { instance } from './api';

const getSubscribesChannel = (accessToken, accessTokenType, pageToken = '') => {
    return instance
    .get('subscriptions', {
        params: {
            part: 'snippet,contentDetails',
            mine: true,
            pageToken
        },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    })
    .then(response => response.data)
}

const getSubscriptionStatus = (accessToken, accessTokenType, channelId) => {
    return instance
    .get('subscriptions', {
        params: {
            part: "snippet",
            forChannelId: channelId,
            mine: true,
        },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    })
    .then(response => response.data.items);
}

const subscribe = (accessToken, accessTokenType, channelId) => {
    return instance
    .post('subscriptions', {
        snippet: { resourceId: { channelId, }, }
    },
    {
        params: { part: 'snippet' },
        headers: { Authorization: `${accessTokenType} ${accessToken}` }
    });
}

const refuse = (accessToken, accessTokenType, subscribeId) => {
    return instance
    .delete('subscriptions', {
        params: { id: subscribeId },
        headers: { Authorization: `${accessTokenType} ${accessToken}`}
    });
}


export const subscribesApi = { getSubscribesChannel, getSubscriptionStatus, subscribe, refuse };



