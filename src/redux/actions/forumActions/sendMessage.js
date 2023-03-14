
import Urls from '../../../config/network/Urls';
const {baseUrl} = Urls;

const sendMessage = messageInfo => {
    let url = `${baseUrl}/forum-messages/add`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message_info: messageInfo})
    }
    return async dispatch => {
        dispatch({type: "SENDING_MESSAGE"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {message} = data;
                    return dispatch({type: "MESSAGE_SEND_SUCCESS", message});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "MESSAGE_SEND_ERROR", message});
                }
            })
    }
}

export default sendMessage;