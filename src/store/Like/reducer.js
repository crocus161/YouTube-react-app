import { SET_DISLIKE_RATE_VIDEO, SET_LIKE_LOADING, SET_LIKE_RATE_VIDEO, SET_LIKE_VIDEOS, SET_MORE_LIKE_VIDEOS } from './actions';

const initialState = {
    items: [],
    pageInfo: null,
    loading: false,
    rate: {
        like: false,
        dislike: false
    }
};

const likeReducer = (state = initialState, action) => {
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
        case SET_LIKE_RATE_VIDEO: 
            return {
                ...state,
                rate: {
                    like: true,
                    dislike: false
                }
            }
        case SET_DISLIKE_RATE_VIDEO: 
            return {
                ...state,
                rate: {
                    like: false,
                    dislike: true
                }
            }
        default:
            return state
    }
}

export default likeReducer;