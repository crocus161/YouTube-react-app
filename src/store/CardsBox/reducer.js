import { SET_MOVE_UP } from './actions';

const initialState = {
    moveUp: false
}

const cardsBoxReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOVE_UP:
            return {
                moveUp: !state.moveUp
            }
        default:
            return state
    }
}

export default cardsBoxReducer;