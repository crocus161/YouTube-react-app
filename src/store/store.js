import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import exploreReducer from './Explore/reducer';
import trendingReducer from './Trending/reducer';
import searchReducer from './Search/reducer';
import cardsBoxReducer from './CardsBox/reducer';


const reducers = combineReducers({
    explore: exploreReducer,
    trending: trendingReducer,
    search: searchReducer,
    cardsBox: cardsBoxReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
