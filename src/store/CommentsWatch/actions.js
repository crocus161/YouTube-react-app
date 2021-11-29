import { watchApi } from '../../api/watchApi';
import { setError } from '../Error/actions';

export const SET_WATCH_COMMENTS = 'WATCH/SET_WATCH_COMMENTS';

//ACTION CREATORS
const setWatchCommentsSuccess = (payload) => ({
    type: SET_WATCH_COMMENTS, payload
})

//THUNKS
export const setWatchComments = (videoId) => (dispatch) => {
    watchApi
        .getCommentsData(videoId)
        .then(response => {
            dispatch(setWatchCommentsSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}