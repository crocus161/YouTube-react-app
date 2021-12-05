import { SET_SUBS_LOADING, SET_SUBS_CHANNEL, SET_MORE_SUBS_CHANNEL, SET_SUBS_STATUS, SET_SUBS_STATUS_ID } from './actions';

const initialState = {
    items: [],
    pageInfo: null,
    loading: false,
    subStatus: false,
    subStatusId: ''
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
        case SET_SUBS_STATUS:
            return {
                ...state,
                subStatus: action.payload
            }
        case SET_SUBS_STATUS_ID: 
            return {
                ...state,
                subStatusId: action.payload
            }
        default:
            return state
    }
}

export default subsReducer;