import { SET_MORE_RELATED_DATA, SET_RELATED_DATA, SET_RELATED_LOADING, SET_WATCH_DATA } from './actions';

const initialState = {
    watchVideo: {},
    relatedVideos: {
        items: [],
        nextPageToken: '',
        totalResults: '',
        loading: true
    }
};

const watchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WATCH_DATA: 
            return {
                ...state,
                watchVideo: {...action.payload}
            }
        case SET_RELATED_DATA: 
            return {
                ...state,
                relatedVideos: {
                    items: action.payload.items,
                    nextPageToken: action.payload.nextPageToken,
                    totalResults: action.payload.pageInfo.totalResults
                }
            }
        case SET_MORE_RELATED_DATA:
            return {
                ...state,
                relatedVideos: {
                    items: [...state.relatedVideos.items, ...action.payload.items],
                    nextPageToken: action.payload.nextPageToken,
                    totalResults: action.payload.pageInfo.totalResults
                }
            }
        case SET_RELATED_LOADING: {
            return {
                ...state,
                relatedVideos: {
                    ...state.relatedVideos,
                    loading: action.payload
                }
            }
        }
        default:
            return state
    }
}

export default watchReducer;