import { createSlice } from "@reduxjs/toolkit";
import showData from '../../data/data.json'

const initialState = {
 
    shows:[...showData],
    loading: false,
    error: null
}


const ShowSlice = createSlice({
name:'shows',
initialState,

})

export const selectAllShows= (state) => state.shows.shows
export const selectAllNonTrendingShows = (state) => state.shows.shows.filter((show) => show.isTrending !== true)
export const selectAllMovies = (state) => state.shows.shows.filter((show) => show.category === 'Movie')
export const selectAllTvShows = (state) => state.shows.shows.filter((show) => show.category === 'TV Series')
export const TrendingShows = (state) => state.shows.shows.filter((show) => show.isTrending === true)
export const LoadingState = (state) => state.shows.loading
export const ShowError  = (state) => state


export default ShowSlice.reducer