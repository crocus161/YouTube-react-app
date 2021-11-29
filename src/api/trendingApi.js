import { instance } from './api';

const getTrendingData = (pageToken) => {

    const params = {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        pageToken
    }

    return instance
    .get('videos', { params })
    .then(response => response.data);
}

export const trendingApi = { getTrendingData };
