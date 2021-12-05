import { subscribesApi } from '../../api/subscribesApi';
import { setError } from '../Error/actions';

export const SET_SUBS_CHANNEL = 'SUBS/SET_SUBS_CHANNEL';
export const SET_MORE_SUBS_CHANNEL = 'SUBS/SET_MORE_SUBS_CHANNEL';
export const SET_SUBS_LOADING = 'SUBS/SET_SUBS_LOADING';
export const SET_SUBS_STATUS = 'SUBS/SET_SUBS_STATUS';
export const SET_SUBS_STATUS_ID = 'SUBS/SET_SUBS_STATUS_ID';

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

const setSubsStatusSuccess = (payload) => ({
    type: SET_SUBS_STATUS, payload
})

const setSubsStatusId = (payload) => ({
    type: SET_SUBS_STATUS_ID, payload
})

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

export const setSubsStatus = (channelId) => (dispatch, getState) => {
    const {accessToken, accessTokenType} = getState().auth;

    subscribesApi
        .getSubscriptionStatus(accessToken, accessTokenType, channelId)
        .then(response => {
            const status = response.length > 0;
            dispatch(setSubsStatusSuccess(status));
            if(status) dispatch(setSubsStatusId(response[0].id));
        });
}

export const setSubscribe = (channelId) => (dispatch, getState) => {
    const {accessToken, accessTokenType} = getState().auth;

    subscribesApi
        .subscribe(accessToken, accessTokenType, channelId)
        .then(response => {
            dispatch(setSubsStatusSuccess(true));
        })
}

export const outSubscribe = () => (dispatch, getState) => {
    const {accessToken, accessTokenType} = getState().auth,
        subscribeId = getState().subscribe.subStatusId;

    subscribesApi
        .refuse(accessToken, accessTokenType, subscribeId)
        .then(response => {
            dispatch(setSubsStatusSuccess(false));
        })
}