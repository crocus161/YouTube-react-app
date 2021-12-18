import { authApi } from '../../api/authApi';
import { setError } from '../Error/actions';

export const SET_SIGN_IN = 'AUTH/SET_SIGN_IN';

//ACTION CREATORS
export const setSingInSuccess = (payload) => ({
    type: SET_SIGN_IN, payload
})

//THUNKS
export const setSignIn = () => (dispatch) => {
    console.log('work set sign in');
    authApi
        .signIn()
        .then(response => {
            dispatch(setSingInSuccess(response));
        })
        // .catch(error => {
        //     dispatch(setError(true));
        // });
}


