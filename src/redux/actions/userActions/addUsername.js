import Urls from "../../../config/network/Urls"
const {baseUrl} = Urls;

const addUsername = userInfo => {
    let url = `${baseUrl}/users`;
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            user_info: userInfo
        })
    };
    return async dispatch => {
        dispatch({type: "UPDATING_USER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {username} = data;
                    return dispatch({type: "USER_UPDATE_SUCCESS", username});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "USER_UPDATE_ERROR", message});
                }
            })
    }
}

export default addUsername