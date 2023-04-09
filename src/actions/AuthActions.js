export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const loginUser = (email, password) => async (dispatch) => {
    try {
        // Perform login logic here
        const loggedInUser = {}; // define loggedInUser variable
        loggedInUser = { email: email, password: password }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: loggedInUser },
        });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: { error: error.message } });
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        // Perform logout logic here
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAILURE, payload: { error: error.message } });
    }
};

export const registerUser = (user) => async (dispatch) => {
    try {
        // Perform register logic here
        const registeredUser = {}; // define registeredUser variable
        dispatch({ type: REGISTER_SUCCESS, payload: { user: registeredUser } });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: { error: error.message } });
    }
};

export const resetPassword = (email) => async (dispatch) => {
    try {
        // Perform reset password logic here
        console.log('Reset password for email:', email);
    } catch (error) {
        console.log('Error resetting password:', error);
        throw error;
    }
};


