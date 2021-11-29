import { SET_LOADING, SET_TRENDING_DATA, SET_TRENDING_MORE_DATA } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    pageInfo: null,
    loading: true,
    isFull: false
};

const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_DATA:
            return {
                ...state,
                ...action.payload,
                isFull: true
            }
        case SET_TRENDING_MORE_DATA: 
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

export default trendingReducer;