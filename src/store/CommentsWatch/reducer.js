import { SET_MORE_WATCH_COMMENTS, SET_WATCH_COMMENTS } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    pageInfo: {}
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
        default:
            return state
    }
}

export default commentsWatchReducer;