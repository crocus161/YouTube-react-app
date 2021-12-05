import { ADD_NEW_COMMENT_ERROR } from './actions';


const initialState = {
    error: false
};

const commentsFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_COMMENT_ERROR: 
            return {
                error: true
            }
        default:
            return state
    }
}

export default commentsFormReducer;