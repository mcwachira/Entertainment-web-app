
import React, { useState } from 'react'
import BookMarkedShow from '../../components/BookMarkComponent/BookMarkedShows'
import { useSelector } from 'react-redux'
import Search from '../../components/Search/Search.component'
import { BookMarkPageContainer, BookMarkContainer } from './BookMark-styles'
import { removeFromFavorites, selectAllMovies } from '../../redux/Features/ShowSlice'
import BookmarkButton from '../../components/bookmarkButton/Bookmark-Button'

const BookMarkPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [removeFromFavorites, setRemoveFavorite] = useState([])
  

    const favoritesDb = useSelector((state) => state.shows.favorites)
    console.log(favoritesDb)
   
    const SearchMovie = (searchValue) => {
        setSearchTerm(searchValue)
        // console.log(searchTerm)
    }
    return (
        <BookMarkPageContainer>
            <BookMarkContainer>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={SearchMovie} />
                <BookMarkedShow searchTerm={searchTerm} favoritesDb={favoritesDb} BookmarkButton={BookmarkButton}  />
            </BookMarkContainer>
        </BookMarkPageContainer>
    )
}

export default BookMarkPage