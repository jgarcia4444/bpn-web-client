
const initialState = {
    email: "",
    username: "",
    userId: "",
    loading: false,
    signUpErrors: [],
    loginErrors: [],
    updateUsernameError: "",
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATING_USER":
            return {
                ...state,
                loading: true,
            }
        case "USER_UPDATE_SUCCESS":
            return {
                ...state,
                loading: false,
                signUpErrors: [],
                loginErrors: [],
                username: action.username
            }
        case "USER_UPDATE_ERROR":
            return {
                ...state,
                loading: false,
                updateUsernameError: action.message,
            }
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                ...action.userInfo,
            }
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loginErrors: action.errors
            }
        case "LOGGING_IN":
            return {
                ...initialState,
                loading: true,
            }
        case "LOGOUT":
            return {
                ...initialState,
            }
        case "SIGN_UP_SUCCESS":
            return {
                ...initialState,
                ...action.userInfo,
            }
        case "SIGN_UP_ERROR":
            return {
                ...initialState,
                signUpErrors: action.errors,
            }
        case "SIGNING_UP":
            return {
                ...initialState,
                loading: true,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default userReducer;