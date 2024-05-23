import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { parseData } from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

export const searchPageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        const {
            youtube : {nextPage : nextPageTokenFromState, videos, searchedTerm},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${searchedTerm}&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageTokenFromState}` : ""
          }`);
        const items = response.data.items;
        console.log(items)
        const parsedData = await parseData(items);

        return {parsedData:[...videos,...parsedData], nextPage:nextPageTokenFromState}
    }
)