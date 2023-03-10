const initialState = {
    loadingRecords: false,
    recordsLoadError: "",
    records: [],
}

const recordsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "RECORDS_LOAD_SUCCESS":
            return {
                ...initialState,
                records: action.records,
            }
        case "RECORDS_LOAD_ERROR":
            return {
                ...initialState,
                recordsLoadError: action.message,
            }
        case "LOADING_RECORDS":
            return {
                ...initialState,
                loadingRecords: true,
            }
        default: 
            return {
                ...initialState,
            }
    }
}

export default recordsReducer;

