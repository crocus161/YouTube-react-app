import { SET_MORE_EXPLORE_DATA, SET_EXPLORE_DATA, SET_EXPLORE_LOADING} from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    totalResults: '',
    loading: false
};

const exploreReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_EXPLORE_DATA: 
            return {
                ...state,
                ...action.payload
            }
        case SET_MORE_EXPLORE_DATA:
            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                nextPageToken: action.payload.nextPageToken,
                totalResults: action.payload.pageInfo.totalResults
            }
        case SET_EXPLORE_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default exploreReducer;