import { SET_WATCH_DATA, SET_WATCH_LOADING } from './actions';

const initialState = {
    loading: true
};

const currentWatchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WATCH_DATA: 
            return {
                ...state,
                ...action.payload
            }

        case SET_WATCH_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default currentWatchReducer;