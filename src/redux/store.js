import { configureStore } from "@reduxjs/toolkit";

import ShowReducer from './Features/ShowSlice'


const store = configureStore({
    reducer:{
        shows:ShowReducer
    }
})

export default store