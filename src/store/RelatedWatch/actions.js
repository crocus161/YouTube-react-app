import { watchApi } from '../../api/watchApi';
import { setError } from '../Error/actions';

export const SET_RELATED_DATA = 'RELATED_WATCH/SET_RELATED_DATA';
export const SET_MORE_RELATED_DATA = 'RELATED_WATCH/SET_MORE_RELATED_DATA';
export const SET_RELATED_LOADING = 'RELATED_WATCH/SET_RELATED_LOADING';

//ACTION CREATORS
const setRelatedDataSuccess = (payload) => ({
    type: SET_RELATED_DATA, payload
})

const setMoreRelatedDataSuccess = (payload) => ({
    type: SET_MORE_RELATED_DATA, payload
})

const setRelatedLoadingSuccess = (payload) => ({
    type: SET_RELATED_LOADING, payload
})

//THUNKS
export const setRelatedData = (channelId) => (dispatch) => {
    dispatch(setRelatedLoadingSuccess(true));
    
    watchApi
        .getRelatedVideoData(channelId)
        .then(response => {
            dispatch(setRelatedDataSuccess(response));
            dispatch(setRelatedLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreRelatedData = () => (dispatch, getState) => {

    const pageToken = getState().relatedWatch.nextPageToken,
      channelId = getState().currentWatch.snippet.channelId;

    watchApi
        .getRelatedVideoData(channelId, pageToken)
        .then(response => {
            dispatch(setMoreRelatedDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}
