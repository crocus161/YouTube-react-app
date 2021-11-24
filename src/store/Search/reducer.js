import { SET_LOADING, SET_MORE_SEARCH_RESULT_DATA, SET_SEARCH_QUERY, SET_SEARCH_RESULT_DATA } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    pageInfo: null,
    searchQuery: '',
    loading: false
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_RESULT_DATA:
            return {
                ...state,
                items: action.payload.items,
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo,
            }
        case SET_SEARCH_QUERY: 
            return {
                ...state,
                searchQuery: action.payload
            }
        case SET_MORE_SEARCH_RESULT_DATA:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                pageInfo: action.payload.pageInfo,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;