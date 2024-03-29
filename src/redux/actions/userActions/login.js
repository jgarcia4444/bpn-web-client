
import Urls from "../../../config/network/Urls";
const {baseUrl} = Urls;

const login = userInfo => {
    console.log("login triggered")
    let url = `${baseUrl}/users/login`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({login_info: userInfo})
    };
    return async dispatch => {
        dispatch({type: "LOGGING_IN"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log("response from login", data);
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "LOGIN_SUCCESS", userInfo});
                } else {
                    let {errors} = data;
                    return dispatch({type:"LOGIN_ERROR", errors});
                }
            })
    }
}

export default login;