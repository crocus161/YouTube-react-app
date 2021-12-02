import { SET_SIGN_IN } from './actions'

const initialState = {
    isAuth: false,
    userProfile: null,
    accessToken: null,
    accessTokenType: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SIGN_IN:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export default authReducer;