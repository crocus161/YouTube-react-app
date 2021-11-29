import { watchApi } from '../../api/watchApi';
import { setError } from '../Error/actions';

export const SET_WATCH_DATA = 'WATCH/SET_WATCH_DATA';
export const SET_WATCH_LOADING = 'WATCH/SET_WATCH_LOADING';

//ACTION CREATORS
const setWatchDataSuccess = (payload) => ({
    type: SET_WATCH_DATA, payload
})

const setWatchLoadingSuccess = (payload) => ({
    type: SET_WATCH_LOADING, payload
})

//THUNKS
export const setWatchData = (videoId) => (dispatch) => {
    
    dispatch(setWatchLoadingSuccess(true));

    watchApi
        .getWatchVideoData(videoId)
        .then(response => {
            dispatch(setWatchDataSuccess(response));
            setTimeout(() => {
                dispatch(setWatchLoadingSuccess(false));
            }, 1500);
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

