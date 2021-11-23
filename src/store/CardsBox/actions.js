
export const SET_MOVE_UP = 'CARDSBOX/SET_MOVE_UP';

//ACTION CREATORS
export const setMoveUpSuccess= () => ({type: SET_MOVE_UP});

//THUNKS
export const setMoveUp = () => (dispatch) => {
    dispatch(setMoveUpSuccess());
}

