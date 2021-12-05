import { feedbackApi } from '../../api/feedbackApi';

export const SET_FEEDBACK_STATUS = 'FEEDBACK/SET_FEEDBACK_STATUS';

//ACTION CREATORS
export const setFeedbackStatusSuccess = (payload) => ({
    type: SET_FEEDBACK_STATUS, payload
})


//THUNKS
export const sendFeedback = (message) => (dispatch) => {
    feedbackApi
        .postFeedback(message)
        .then(response => {
            if(response.ok) {
                dispatch(setFeedbackStatusSuccess(false));
            }
        })
        .catch(error => {
            dispatch(setFeedbackStatusSuccess(true));
        });
}


