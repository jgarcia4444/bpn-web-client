
const initialState = {
    email: "",
    username: "",
    loading: false,
    signUpErrors: [],
    loginErrors: [],
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
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