import { createSlice } from "@reduxjs/toolkit";
import showData from '../../data/data.json'

const initialState = {
 
    shows:[...showData],
    loading: false,
    error: null,
    favorites:[],
    searchTerm:""
}


const ShowSlice = createSlice({
name:'shows',
initialState,
reducers:{

    addToFavorites:(state, action) => {
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
      console.log(action.payload)
        if(!state.favorites.includes(action.payload)){
            state.favorites.push(action.payload)
            localStorage.setItem('show', JSON.stringify(state.favorites))
            
        } 
     console.log(state.favorites)
    },

    removeFromFavorites(state,action){
    
        const newFavorites = state.favorites.filter((favorite) => favorite.title !== action.payload.title)
        state.favorites = newFavorites
        console.log(action.payload)
       
        
        console.log(newFavorites)
        //later save items again to reflect new storage
         localStorage.setItem('show', JSON.stringify(newFavorites))
  
    },

    setShowSearchTerm:(state, action) => {
        state.searchTerm = action.payload
    }
}

})


export const { addToFavorites, removeFromFavorites, setShowSearchTerm } = ShowSlice.actions
export const selectAllShows= (state) => state.shows.shows
export const selectAllNonTrendingShows = (state) => state.shows.shows.filter((show) => show.isTrending !== true)
export const selectAllMovies = (state) => state.shows.shows.filter((show) => show.category === 'Movie')
export const selectAllTvShows = (state) => state.shows.shows.filter((show) => show.category === 'TV Series')
export const TrendingShows = (state) => state.shows.shows.filter((show) => show.isTrending === true)
export const LoadingState = (state) => state.shows.loading
export const ShowError  = (state) => state


export default ShowSlice.reducer