import { SET_CHANNEL_DATA, SET_CHANNEL_LOADING } from './actions';

const initialState = {
    loading: false
};

const channelDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHANNEL_DATA: 
            return {
                ...state,
                ...action.payload
            }
        case SET_CHANNEL_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default channelDataReducer;