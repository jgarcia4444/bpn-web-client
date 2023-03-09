
import Urls from "../../../config/network/Urls";
const {baseUrl} = Urls;

const signUp = (userInfo) => {
    let url = `${baseUrl}/users`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_info: {
                ...userInfo
            },
        })
    }
    return async dispatch => {
        dispatch({type: "SIGNING_UP"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "SIGN_UP_SUCCESS", userInfo});
                } else {
                    let {errors} = data;
                    return dispatch({type: "SIGN_UP_ERROR", errors});
                }
            })
    }
}

export default signUp;
