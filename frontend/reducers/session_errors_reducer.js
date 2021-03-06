import { CLOSE_MODAL } from '../actions/modal_actions';
import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;