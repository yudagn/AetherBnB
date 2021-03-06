import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (
    sessionAPIUtil.login(user)
        .then(currentUser => (
            dispatch(receiveCurrentUser(currentUser))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
        ))
)

export const signup = user => (
    dispatch => (
        sessionAPIUtil.signup(user)
            .then(currentUser => (
                dispatch(receiveCurrentUser(currentUser))
            ), error => (
                dispatch(receiveErrors(error.responseJSON))
            ))
    )
)

export const logout = () => (
    dispatch => (
        sessionAPIUtil.logout()
            .then(() => dispatch(logoutCurrentUser()))
    )
)

