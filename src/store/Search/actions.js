import { searchApi } from '../../api/searchApi';
import { setMoveUp } from '../CardsBox/actions';

export const SET_MORE_SEARCH_RESULT_DATA = 'SEARCH/SET_MORE_SEARCH_RESULT_DATA';
export const SET_SEARCH_RESULT_DATA = 'SEARCH/SET_SEARCH_RESULT_DATA';
export const SET_SEARCH_QUERY = 'SEARCH/SET_SEARCH_QUERY';

//ACTION CREATORS
export const setMoreSearchResultDataSuccess = (payload) => ({
    type: SET_MORE_SEARCH_RESULT_DATA, payload
});

export const setSearchResultDataSuccess = (payload) => ({
    type: SET_SEARCH_RESULT_DATA, payload
});

export const setSearchQuerySuccess = (payload) => ({
    type: SET_SEARCH_QUERY, payload
});


//THUNKS
export const setSearchResultData = (searchQuery) => (dispatch) => {

    //set scroll top of the box to 0 after new request
    dispatch(setMoveUp());
    //set still query for setMoreData thunk
    dispatch(setSearchQuerySuccess(searchQuery));

    searchApi
        .getSearchResultData(searchQuery, '')
        .then(response => {
            dispatch(setSearchResultDataSuccess(response));
        });
}

export const setMoreSearchResultData = () => (dispatch, getState) => {

    const searchQuery = getState().search.searchQuery,
        pageToken = getState().search.nextPageToken;

    searchApi
        .getSearchResultData(searchQuery, pageToken)
        .then(response => {
            dispatch(setMoreSearchResultDataSuccess(response));
        });
}

