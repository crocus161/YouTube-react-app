import { likeVideosApi } from '../../api/likeVideosApi';
import { setError } from '../Error/actions';

export const SET_LIKE_VIDEOS = 'LIKE_VIDEOS/SET_LIKE_VIDEOS';
export const SET_MORE_LIKE_VIDEOS = 'LIKE_VIDEOS/SET_MORE_LIKE_VIDEOS';
export const SET_LIKE_LOADING = 'LIKE_VIDEOS/SET_LIKE_LOADING';

//ACTION CREATORS
const setLikeVideosSuccess = (payload) => ({
    type: SET_LIKE_VIDEOS, payload
})

const setMoreLikeVideosSuccess = (payload) => ({
    type: SET_MORE_LIKE_VIDEOS, payload
})

const setLikeLoadingSuccess = (payload) => ({
    type: SET_LIKE_LOADING, payload
});

//THUNKS
export const setLikeVideos = () => (dispatch, getState) => {
    
    const {accessToken, accessTokenType} = getState().auth;

    dispatch(setLikeLoadingSuccess(true));

    likeVideosApi
        .getLikeVideos(accessToken, accessTokenType)
        .then(response => {
            dispatch(setLikeVideosSuccess(response));
            dispatch(setLikeLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreLikeVideos = () => (dispatch, getState) => {

    const {accessToken, accessTokenType} = getState().auth,
        pageToken = getState().likeVideos.nextPageToken;

    likeVideosApi
        .getLikeVideos(accessToken, accessTokenType, pageToken)
        .then(response => {
            dispatch(setMoreLikeVideosSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}