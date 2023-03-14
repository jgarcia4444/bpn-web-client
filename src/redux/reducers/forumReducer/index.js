
const initialState = {
    messages: [],
    loadingMessages: false,
    messagesLoadError: "",
    fetchServed: false,
}

const forumReducer = (state=initialState, action) => {
    switch(action.type) {
        case "MESSAGE_SEND_ERROR":
            return {
                ...initialState,
                messagesLoadError: action.message,
            }
        case "MESSAGE_SEND_SUCCESS":
            return {
                ...initialState,
                messages: state.messages.concat(action.message),
            }
        case "SENDING_MESSAGE":
            return {
                ...initialState,
                loadingMessages: true,
            }
        case "MESSAGES_LOAD_ERROR":
            return {
                ...initialState,
                messagesLoadError: action.message,
                fetchServed: true,
            }
        case "MESSAGES_LOAD_SUCCESS":
            return {
                ...initialState,
                messages: action.messages,
                fetchServed: true,
            }
        case "LOADING_MESSAGES":
            return {
                ...state,
                loadingMessages: true,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default forumReducer;