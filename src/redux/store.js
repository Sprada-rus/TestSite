import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./reducers/reducer";

export const store = configureStore({
    reducer: {
        authorization: authorizationReducer
    }
})