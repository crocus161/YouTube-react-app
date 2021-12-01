import { channelApi } from '../../api/channelApi'
import { setError } from '../Error/actions';


export const SET_CHANNEL_DATA = 'CHANNEL_DATA/SET_CHANNEL_DATA';
export const SET_CHANNEL_LOADING = 'CHANNEL_DATA/SET_CHANNEL_LOADING';

//ACTION CREATORS
const setChannelDataSuccess = (payload) => ({
    type: SET_CHANNEL_DATA, payload
})

const setChannelLoading = (payload) => ({
    type: SET_CHANNEL_LOADING, payload
});

//THUNKS
export const setChannelData = (videoId) => (dispatch) => {
    dispatch(setChannelLoading(true));

    channelApi
        .getChannelData(videoId)
        .then(response => {
            dispatch(setChannelDataSuccess(response));
            setTimeout(() => {
                dispatch(setChannelLoading(false));
            }, 1500);
        })
        .catch(error => {
            dispatch(setError(true));
        });
}
