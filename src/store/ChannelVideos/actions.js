import { channelApi } from '../../api/channelApi'
import { setError } from '../Error/actions';

export const SET_CHANNEL_VIDEOS = 'CHANNEL_VIDEO/SET_CHANNEL_VIDEOS';

//ACTION CREATORS
const setChannelVideosSuccess = (payload) => ({
    type: SET_CHANNEL_VIDEOS, payload
})

//THUNKS
export const setChannelVideos = (videoId) => (dispatch) => {
    channelApi
        .getChannelVideos(videoId)
        .then(response => {
            dispatch(setChannelVideosSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}