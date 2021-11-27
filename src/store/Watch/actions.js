import { watchApi } from '../../api/watchApi';
import { setError } from '../Error/actions';

export const SET_WATCH_DATA = 'WATCH/SET_WATCH_DATA';
export const SET_RELATED_DATA = 'WATCH/SET_RELATED_DATA';
export const SET_RELATED_LOADING = 'WATCH/SET_RELATED_LOADING';

//ACTION CREATORS
const setWatchDataSuccess = (payload) => ({
    type: SET_WATCH_DATA, payload
})

const setRelatedDataSuccess = (payload) => ({
    type: SET_RELATED_DATA, payload
})

const setRelatedLoadingSuccess = (payload) => ({
    type: SET_RELATED_LOADING, payload
})

//THUNKS
export const setWatchData = (videoId) => (dispatch) => {

    watchApi
        .getWatchVideoData(videoId)
        .then(response => {
            dispatch(setWatchDataSuccess(response))
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

export const setRelatedData = (id) => (dispatch, getState) => {

    dispatch(setRelatedLoadingSuccess(true));

    const pageToken = getState().watch.relatedVideos.nextPageToken,
        videoId = getState().watch.watchVideo.id || id;

    watchApi
        .getRelatedVideoData(videoId, pageToken)
        .then(response => {
            dispatch(setRelatedDataSuccess(response));
            dispatch(setRelatedLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true))
        })
}
