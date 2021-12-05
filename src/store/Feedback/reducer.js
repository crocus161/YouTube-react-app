import { SET_FEEDBACK_STATUS} from './actions'

const initialState = {
    errorStatus: false, 
}

const feedbackReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FEEDBACK_STATUS: 
            return {
                errorStatus: action.payload, 
            }
        default:
            return state
    }
}

export default feedbackReducer;