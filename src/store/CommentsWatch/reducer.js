import { SET_MORE_WATCH_COMMENTS, SET_WATCH_COMMENTS, SET_WATCH_COMMENTS_FAILED } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    pageInfo: {},
    error: false
};

const commentsWatchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WATCH_COMMENTS: 
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_WATCH_COMMENTS: 
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo
            }
        case SET_WATCH_COMMENTS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default commentsWatchReducer;