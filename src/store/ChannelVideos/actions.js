import { channelApi } from '../../api/channelApi'
import { setError } from '../Error/actions';

export const SET_CHANNEL_VIDEOS = 'CHANNEL_VIDEOS/SET_CHANNEL_VIDEOS';
export const SET_MORE_CHANNEL_VIDEOS = 'CHANNEL_VIDEOS/SET_MORE_CHANNEL_VIDEOS';
export const SET_CHANNEL_LOADING = 'CHANNEL_VIDEOS/SET_CHANNEL_LOADING';

//ACTION CREATORS
const setChannelVideosSuccess = (payload) => ({
    type: SET_CHANNEL_VIDEOS, payload
})

const setMoreChannelVideosSuccess = (payload) => ({
    type: SET_MORE_CHANNEL_VIDEOS, payload
})

const setChannelLoadingSuccess = (payload) => ({
    type: SET_CHANNEL_LOADING, payload
});

//THUNKS
export const setChannelVideos = (playlistId) => (dispatch) => {
    dispatch(setChannelLoadingSuccess(true));

    channelApi
        .getChannelVideos(playlistId)
        .then(response => {
            dispatch(setChannelVideosSuccess(response));
            dispatch(setChannelLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreChannelVideos = () => (dispatch, getState) => {

    const playlistId = getState().channelData.contentDetails.relatedPlaylists.uploads,
        pageToken = (getState().channelVideos.nextPageToken);

    channelApi
        .getChannelVideos(playlistId, pageToken)
        .then(response => {
            dispatch(setMoreChannelVideosSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}