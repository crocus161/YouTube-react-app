import { SET_TRENDING_DATA } from './actions';

const initialState = {
    items: [],
    nextPageToken: '',
    pageInfo: null,
    etag: ''
};

const trendingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRENDING_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default trendingReducer;