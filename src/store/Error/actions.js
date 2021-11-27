
export const SET_ERROR = 'ERROR/SET_ERROR';

//ACTION CREATORS
export const setErrorSuccess = (payload) => ({
    type: SET_ERROR, payload
});


//THUNKS
export const setError = (payload) => (dispatch) => {
    dispatch(setErrorSuccess(payload));
}

