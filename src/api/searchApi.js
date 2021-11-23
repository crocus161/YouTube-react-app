import { instance } from './api';

const params = {
    part: 'snippet',
}

const getSearchResultData = (searchQuery, pageToken) => {
    return instance
    .get('search', {
        params: {
            ...params,
            q: searchQuery,
            pageToken
        }
    })
    .then(response => response.data);
}

export const searchApi = { getSearchResultData };