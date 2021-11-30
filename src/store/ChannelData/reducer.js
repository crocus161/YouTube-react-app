import { SET_CHANNEL_DATA } from './actions';

const initialState = {};

const channelDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHANNEL_DATA: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default channelDataReducer;