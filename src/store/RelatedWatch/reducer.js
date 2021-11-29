import { SET_MORE_RELATED_DATA, SET_RELATED_DATA, SET_RELATED_LOADING } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    totalResults: '',
    loading: false
};

const relatedWatchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RELATED_DATA: 
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_RELATED_DATA:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                totalResults: action.payload.pageInfo.totalResults
            }
        case SET_RELATED_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default relatedWatchReducer;