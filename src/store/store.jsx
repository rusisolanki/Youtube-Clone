import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./slice/youtube";

const store = configureStore({
    reducer: {
        youtube: youtubeReducer
    }
})

export default store