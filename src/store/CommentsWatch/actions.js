import { commentApi } from '../../api/commentApi';

export const SET_WATCH_COMMENTS = 'COMMENTS_WATCH/SET_WATCH_COMMENTS';
export const SET_MORE_WATCH_COMMENTS = 'COMMENTS_WATCH/SET_MORE_WATCH_COMMENTS';
export const SET_WATCH_COMMENTS_FAILED = 'COMMENTS_WATCH/SET_WATCH_COMMENTS_FAILED';

//ACTION CREATORS
const setWatchCommentsSuccess = (payload) => ({
    type: SET_WATCH_COMMENTS, payload
})
const setMoreWatchCommentsSuccess = (payload) => ({
    type: SET_MORE_WATCH_COMMENTS, payload
})
const setWatchCommentsFailed = (payload) => ({
    type: SET_WATCH_COMMENTS_FAILED, payload
})

//THUNKS
export const setWatchComments = (videoId) => (dispatch) => {
    dispatch(setWatchCommentsFailed(false));

    commentApi
        .getCommentsData(videoId)
        .then(response => {
            dispatch(setWatchCommentsSuccess(response));
        })
        .catch(error => {
            dispatch(setWatchCommentsFailed(true));
        });
}

export const setMoreWatchComments = () => (dispatch, getState) => {
    dispatch(setWatchCommentsFailed(false));

    const pageToken = getState().commentsWatch.nextPageToken,
        videoId = getState().currentWatch.id;

    commentApi
        .getCommentsData(videoId, pageToken)
        .then(response => {
            dispatch(setMoreWatchCommentsSuccess(response));
        })
        .catch(error => {
            dispatch(setWatchCommentsFailed(true));
        });
}