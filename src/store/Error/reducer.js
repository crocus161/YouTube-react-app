import { SET_ERROR } from './actions';

const initialState = {
    error: false
}

const errorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR: 
            return {
                error: action.payload
            }
        default: 
            return state;
    }
}

export default errorReducer;