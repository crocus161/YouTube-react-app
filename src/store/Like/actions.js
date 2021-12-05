import { likeApi } from '../../api/likeApi';
import { setError } from '../Error/actions';

export const SET_LIKE_VIDEOS = 'LIKE_VIDEOS/SET_LIKE_VIDEOS';
export const SET_MORE_LIKE_VIDEOS = 'LIKE_VIDEOS/SET_MORE_LIKE_VIDEOS';
export const SET_LIKE_LOADING = 'LIKE_VIDEOS/SET_LIKE_LOADING';
export const SET_LIKE_RATE_VIDEO = 'RATE/SET_LIKE_RATE_VIDEO';
export const SET_DISLIKE_RATE_VIDEO = 'RATE/SET_DISLIKE_RATE_VIDEO';

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

export const setLikeRateVideo = (payload) => ({
    type: SET_LIKE_RATE_VIDEO, payload
});

export const setDislikeRateVideo = (payload) => ({
    type: SET_DISLIKE_RATE_VIDEO, payload
})


//THUNKS
export const setLikeVideos = () => (dispatch, getState) => {
    
    const {accessToken, accessTokenType} = getState().auth;

    dispatch(setLikeLoadingSuccess(true));

    likeApi
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
        pageToken = getState().like.nextPageToken;

    likeApi
        .getLikeVideos(accessToken, accessTokenType, pageToken)
        .then(response => {
            dispatch(setMoreLikeVideosSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setRateVideo = (videoId, type) => (dispatch, getState) => {
    const {accessToken, accessTokenType} = getState().auth;
    likeApi
        .rateVideo(accessToken, accessTokenType, videoId, type)
        .then(() => {
            type === 'like' 
                ? dispatch(setLikeRateVideo())
                : dispatch(setDislikeRateVideo())
        })
}

export const setRatingVideo = (videoId) => (dispatch, getState) => {
    
    const {accessToken, accessTokenType, isAuth} = getState().auth;

    if(isAuth) {
        likeApi
            .getRating(accessToken, accessTokenType, videoId)
            .then(response => {
                if(response === 'like') dispatch(setLikeRateVideo())
                else if(response === 'dislike') dispatch(setDislikeRateVideo())
            })
    }
}