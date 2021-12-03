import { SET_SUBS_LOADING, SET_SUBS_CHANNEL, SET_MORE_SUBS_CHANNEL } from './actions';

const initialState = {
    items: [],
    pageInfo: null,
    loading: false
};

const subsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SUBS_CHANNEL:
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_SUBS_CHANNEL:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo
            }
        case SET_SUBS_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default subsReducer;