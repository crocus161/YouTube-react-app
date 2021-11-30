import { instance } from './api';

const getSearchResultData = (q='', pageToken='') => {

    const params = {
        part: 'snippet', q, pageToken
    }

    return instance
    .get('search', { params })
    .then(response => response.data);
}

export const searchApi = { getSearchResultData };