import { commentApi } from '../../api/commentApi';
import { setError } from '../Error/actions';

export const SET_WATCH_COMMENTS = 'COMMENTS_WATCH/SET_WATCH_COMMENTS';
export const SET_MORE_WATCH_COMMENTS = 'COMMENTS_WATCH/SET_MORE_WATCH_COMMENTS';

//ACTION CREATORS
const setWatchCommentsSuccess = (payload) => ({
    type: SET_WATCH_COMMENTS, payload
})
const setMoreWatchCommentsSuccess = (payload) => ({
    type: SET_MORE_WATCH_COMMENTS, payload
})

//THUNKS
export const setWatchComments = (videoId) => (dispatch) => {
    commentApi
        .getCommentsData(videoId)
        .then(response => {
            dispatch(setWatchCommentsSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}

export const setMoreWatchComments = () => (dispatch, getState) => {

    const pageToken = getState().commentsWatch.nextPageToken,
        videoId = getState().currentWatch.id;

    commentApi
        .getCommentsData(videoId, pageToken)
        .then(response => {
            dispatch(setMoreWatchCommentsSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true));
        });
}