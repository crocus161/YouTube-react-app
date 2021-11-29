import { SET_WATCH_COMMENTS } from './actions';

const initialState = {
    items: [],
    nextPageToken: ''
};

const commentsWatchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WATCH_COMMENTS: 
            return {
                ...state,
                items: action.payload.items,
                nextPageToken: action.payload.nextPageToken
            }
        default:
            return state
    }
}

export default commentsWatchReducer;