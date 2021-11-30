import { SET_CHANNEL_VIDEOS } from './actions';

const initialState = {};

const channelVideosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHANNEL_VIDEOS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default channelVideosReducer;