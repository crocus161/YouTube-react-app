import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import exploreReducer from './Explore/reducer';
import trendingReducer from './Trending/reducer';
import searchReducer from './Search/reducer';
import cardsBoxReducer from './CardsBox/reducer';
import errorReducer from './Error/reducer';
import currentWatchReducer from './CurrentWatch/reducer';
import relatedWatchReducer from './RelatedWatch/reducer';
import commentsWatchReducer from './CommentsWatch/reducer';
import channelDataReducer from './ChannelData/reducer';
import channelVideosReducer from './ChannelVideos/reducer';
import likeReducer from './Like/reducer';
import authReducer from './Auth/reducer';
import subsReducer from './Subscribe/reducer';
import feedbackReducer from './Feedback/reducer';
import commentsFormReducer from './CommentsForm/reducer';

const reducers = combineReducers({
    explore: exploreReducer,
    trending: trendingReducer,
    search: searchReducer,
    cardsBox: cardsBoxReducer,
    error: errorReducer,
    currentWatch: currentWatchReducer,
    relatedWatch: relatedWatchReducer,
    commentsWatch: commentsWatchReducer,
    channelData: channelDataReducer,
    channelVideos: channelVideosReducer,
    like: likeReducer,
    auth: authReducer,
    subscribe: subsReducer,
    feedback: feedbackReducer,
    commentsForm: commentsFormReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
