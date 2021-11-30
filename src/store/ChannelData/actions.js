import { channelApi } from '../../api/channelApi'
import { setError } from '../Error/actions';


export const SET_CHANNEL_DATA = 'CHANNEL_DATA/SET_CHANNEL_DATA';

//ACTION CREATORS
const setChannelDataSuccess = (payload) => ({
    type: SET_CHANNEL_DATA, payload
})

//THUNKS
export const setChannelData = (videoId) => (dispatch) => {
    channelApi
        .getChannelData(videoId)
        .then(response => {
            dispatch(setChannelDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}
