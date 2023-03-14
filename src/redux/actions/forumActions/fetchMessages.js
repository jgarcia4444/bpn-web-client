import Urls from "../../../config/network/Urls";
const {baseUrl} = Urls;

const fetchMessages = () => {
    let url = `${baseUrl}/forum-messages`;
    return async dispatch => {
        dispatch({type: "LOADING_MESSAGES"});
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === data) {
                    let {messages} = data;
                    return dispatch({type: "MESSAGES_LOAD_SUCCESS", messages})
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "MESSAGES_LOAD_ERROR" ,message});
                }
            })
    }
}

export default fetchMessages;