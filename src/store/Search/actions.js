import { searchApi } from '../../api/searchApi';
import { setMoveUp } from '../CardsBox/actions';
import { setError } from '../Error/actions';

export const SET_MORE_SEARCH_RESULT_DATA = 'SEARCH/SET_MORE_SEARCH_RESULT_DATA';
export const SET_SEARCH_RESULT_DATA = 'SEARCH/SET_SEARCH_RESULT_DATA';
export const SET_SEARCH_QUERY = 'SEARCH/SET_SEARCH_QUERY';
export const SET_LOADING = 'SEARCH/SET_LOADING';


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

export const setLoadingSuccess = (payload) => ({
    type: SET_LOADING, payload
})

//THUNKS
export const setSearchResultData = (newSearchQuery) => (dispatch) => {

    dispatch(setLoadingSuccess(true));
    //set scroll top of the box to 0 after new request
    dispatch(setMoveUp());
    //set still query for setMoreData thunk
    dispatch(setSearchQuerySuccess(newSearchQuery));

    searchApi
        .getSearchResultData(newSearchQuery, '')
        .then(response => {
            dispatch(setSearchResultDataSuccess(response));
            dispatch(setLoadingSuccess(false));
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

export const setMoreSearchResultData = () => (dispatch, getState) => {

    const searchQuery = getState().search.searchQuery,
        pageToken = getState().search.nextPageToken;

    searchApi
        .getSearchResultData(searchQuery, pageToken)
        .then(response => {
            dispatch(setMoreSearchResultDataSuccess(response));
        })
        .catch(error => {
            dispatch(setError(true))
        });
}

