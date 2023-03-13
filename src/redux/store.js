import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";

import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import recordsReducer from "./reducers/recordsReducer";
import forumReducer from "./reducers/forumReducer";

const persistConfig = {
    key: "BPN-WEB",
    storage: storage
}

const reducer = combineReducers({
    user: userReducer,
    recordsReducer: recordsReducer,
    forum: forumReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({reducer: persistedReducer, middleware: [thunk]});
export const persistor = persistStore(store);