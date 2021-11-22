import { instance } from './api';

const params = {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode: 'UA',
    maxResults: 25,
    pageToken: ''
}

const getTrendingData = () => {
    return instance
    .get('/videos', { params })
    .then(response => response.data)
}

export const trendingApi = { getTrendingData };
