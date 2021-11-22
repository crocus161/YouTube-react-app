import { trendingApi } from '../../api/trendingApi';

export const SET_TRENDING_DATA = 'TRENDING/SET_TRENDING_DATA';


//ACTION CREATORS
export const setTrendingDataSuccess = (payload) => ({
    type: SET_TRENDING_DATA, payload
});


//THUNKS
export const setTrendingData = () => (dispatch) => {
    trendingApi
        .getTrendingData()
        .then(response => {
            dispatch(setTrendingDataSuccess(response));
        });
}

