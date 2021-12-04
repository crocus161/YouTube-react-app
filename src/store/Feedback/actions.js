import { feedbackApi } from '../../api/feedbackApi';

export const SET_FEEDBACK_SUCCESS = 'FEEDBACK/SET_FEEDBACK_SUCCESS';
export const SET_FEEDBACK_ERROR = 'FEEDBACK/SET_FEEDBACK_ERROR';

//ACTION CREATORS
export const setFeedbackStatusSuccess = (payload) => ({
    type: SET_FEEDBACK_SUCCESS, payload
})

export const setFeedbackStatusError = (payload) => ({
    type: SET_FEEDBACK_ERROR, payload
})

//THUNKS
export const sendFeedback = (message) => (dispatch) => {
    feedbackApi
        .postFeedback(message)
        .then(response => {
            dispatch(setFeedbackStatusSuccess(response));
        })
        .catch(error => {
            dispatch(setFeedbackStatusError(true));
        });
}


