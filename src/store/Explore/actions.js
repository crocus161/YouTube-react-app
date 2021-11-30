import { exploreApi } from '../../api/exploreApi';
import { setError } from '../Error/actions';

export const SET_MORE_EXPLORE_DATA = 'EXPLORE/SET_MORE_EXPLORE_DATA';
export const SET_EXPLORE_LOADING = 'EXPLORE/SET_EXPLORE_LOADING';
export const SET_EXPLORE_DATA = 'EXPLORE/SET_EXPLORE_DATA';

//ACTION CREATORS
const setExploreDataSuccess = (payload) => ({
    type: SET_EXPLORE_DATA, payload
});

const setExploreLoadingSuccess = (payload) => ({
    type: SET_EXPLORE_LOADING, payload
});

const setMoreExploreDataSuccess = (payload) => ({
    type: SET_MORE_EXPLORE_DATA, payload
});

//THUNKS
export const setExploreData = () => (dispatch) => {
    
    dispatch(setExploreLoadingSuccess(true));

    exploreApi
        .getExploreVideoData()
        .then(response => {
            dispatch(setExploreDataSuccess(response));
            dispatch(setExploreLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreExploreData = () => (dispatch, getState) => {

    const pageToken = getState().explore.nextPageToken;

    exploreApi
        .getExploreVideoData(pageToken)
        .then(response => {
            dispatch(setMoreExploreDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}
