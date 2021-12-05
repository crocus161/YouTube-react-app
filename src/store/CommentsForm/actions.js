import { commentApi } from '../../api/commentApi';

export const ADD_NEW_COMMENT_ERROR = 'COMMENTS_FORM/ADD_NEW_COMMENT_ERROR';

//ACTION CREATORS
const setAddNewCommentError = (payload) => ({
    type: ADD_NEW_COMMENT_ERROR, payload
});

//THUNKS
export const setNewComment = (videoId, text) => (dispatch, getState) => {

    const {accessToken, accessTokenType} = getState().auth;

    commentApi
        .addComment(accessToken, accessTokenType, videoId, text)
        .catch(error => {
            dispatch(setAddNewCommentError(true));
        });
}