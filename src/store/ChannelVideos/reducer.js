import { SET_CHANNEL_LOADING, SET_CHANNEL_VIDEOS, SET_MORE_CHANNEL_VIDEOS } from './actions';

const initialState = {
    items: [],
    pageInfo: null,
    loading: false
};

const channelVideosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHANNEL_VIDEOS:
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_CHANNEL_VIDEOS:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo
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

export default channelVideosReducer;