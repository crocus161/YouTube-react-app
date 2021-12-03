import { subscribesApi } from '../../api/subscribesApi';
import { setError } from '../Error/actions';

export const SET_SUBS_CHANNEL = 'SUBS/SET_SUBS_CHANNEL';
export const SET_MORE_SUBS_CHANNEL = 'SUBS/SET_MORE_SUBS_CHANNEL';
export const SET_SUBS_LOADING = 'SUBS/SET_SUBS_LOADING';

//ACTION CREATORS
const setSubsChannelSuccess = (payload) => ({
    type: SET_SUBS_CHANNEL, payload
})

const setMoreSubsChannelSuccess = (payload) => ({
    type: SET_MORE_SUBS_CHANNEL, payload
})

const setSubsLoadingSuccess = (payload) => ({
    type: SET_SUBS_LOADING, payload
});

//THUNKS
export const setSubsChannel = () => (dispatch, getState) => {
    
    const {accessToken, accessTokenType} = getState().auth;

    dispatch(setSubsLoadingSuccess(true));

    subscribesApi
        .getSubscribesChannel(accessToken, accessTokenType)
        .then(response => {
            dispatch(setSubsChannelSuccess(response));
            dispatch(setSubsLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreSubsChannel = () => (dispatch, getState) => {

    const {accessToken, accessTokenType} = getState().auth,
        pageToken = getState().subscribe.nextPageToken;

    subscribesApi
        .getSubscribesChannel(accessToken, accessTokenType, pageToken)
        .then(response => {
            dispatch(setMoreSubsChannelSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}