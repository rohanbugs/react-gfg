import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/appReducer"

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})