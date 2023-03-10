import Urls from "../../../config/network/Urls"
const {baseUrl} = Urls;


const fetchRecords = userId => {
    console.log("Fetch records triggered!!!");
    let url = `${baseUrl}/records/${userId}`;
    return async dispatch => {
        dispatch({type: "LOADING_RECORDS"});
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userRecords} = data;
                    return dispatch({type: "RECORDS_LOAD_SUCCESS", records: userRecords});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "RECORDS_LOAD_ERROR", message});
                }
            })
    }
}

export default fetchRecords;