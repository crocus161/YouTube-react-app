import { trendingApi } from '../../api/trendingApi';
import { setError } from '../Error/actions';

export const SET_TRENDING_MORE_DATA = 'TRENDING/SET_TRENDING_MORE_DATA';
export const SET_TRENDING_DATA = 'TRENDING/SET_TRENDING_DATA';
export const SET_LOADING = 'TRENDING/SET_LOADING';


//ACTION CREATORS
export const setTrendingMoreDataSuccess = (payload) => ({
    type: SET_TRENDING_MORE_DATA, payload
});

export const setTrendingDataSuccess = (payload) => ({
    type: SET_TRENDING_DATA, payload
});

export const setLoadingSuccess = (payload) => ({
    type: SET_LOADING, payload
})


//THUNKS
export const setTrendingData = () => (dispatch) => {
    dispatch(setLoadingSuccess(true));

    trendingApi
        .getTrendingData('')
        .then(response => {
            dispatch(setTrendingDataSuccess(response));
            dispatch(setLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

export const setTrendingMoreData = () => (dispatch, getState) => {

    const pageToken = getState().trending.nextPageToken;
    trendingApi
        .getTrendingData(pageToken)
        .then(response => {
            dispatch(setTrendingMoreDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

