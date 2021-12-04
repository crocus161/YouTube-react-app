import { SET_FEEDBACK_ERROR, SET_FEEDBACK_SUCCESS} from './actions'

const initialState = {
    success: false, 
    error: false
}

const feedbackReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FEEDBACK_ERROR: 
            return {
                success: false,
                error: true
            }
        case SET_FEEDBACK_SUCCESS: 
            return {
                success: true,
                error: false
            }
        default:
            return state
    }
}

export default feedbackReducer;