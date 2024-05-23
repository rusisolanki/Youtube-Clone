import { createSlice } from '@reduxjs/toolkit'
import { homePageVideos } from '../reducer/homePageVideos'
import { searchPageVideos } from '../reducer/searchPageVideos'
// import { getRecommendedVideos } from '../reducer/getRecommendedVideos'
import { videoDetails } from '../reducer/videoDetails'

const initialState = {
    videos: [],
    currentPlaying: null,
    searchedTerm: '',
    searchedResults: [],
    nextPage: null,
    recommendedVideos: []
}

const youtubeSlice = createSlice({
    name: 'youtube',
    initialState: initialState,
    reducers: {
        clearVideos(state){
            state.videos = []
            state.nextPage = null
        },
        enteredSearchedTerm(state, action){
            state.searchedTerm = action.payload;
        },
        clearSearchedTerm(state){
            state.searchedTerm = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(homePageVideos.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData
                state.nextPage = action.payload.nextPage
            }
        })
        builder.addCase(searchPageVideos.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData
                state.nextPage = action.payload.nextPage
            }
        })
        builder.addCase(videoDetails.fulfilled, (state, action) => {
                state.currentPlaying = action.payload
        })
        // builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
        //     if(action.payload && action.payload.parsedData){
        //         state.videos = action.payload.parsedData
        //     }
        // })
    }
})

export const actions = youtubeSlice.actions

export default youtubeSlice.reducer