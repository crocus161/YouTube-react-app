import { SET_LIKE_LOADING, SET_LIKE_VIDEOS, SET_MORE_LIKE_VIDEOS } from './actions';

const initialState = {
    items: [],
    pageInfo: null,
    loading: false
};

const likeVideosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LIKE_VIDEOS:
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_LIKE_VIDEOS:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo
            }
        case SET_LIKE_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default likeVideosReducer;