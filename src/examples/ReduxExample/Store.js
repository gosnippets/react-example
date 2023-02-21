import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import CounterSlice from "./CounterSlice";
import UserSlice from "./UserSlice";

const middleware = [logger, thunkMiddleware]

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        user: UserSlice
    },
    middleware
})

export default store;