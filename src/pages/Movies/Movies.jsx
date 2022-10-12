import React ,{useState} from 'react'
import Movies from '../../components/Movies/Movies.component'
import Search from '../../components/Search/Search.component'
import { MoviePageContainer, MovieContainer } from './Movies.styles'
import { useSelector } from 'react-redux'
import { selectAllMovies } from '../../redux/Features/ShowSlice'
import BookmarkButton from '../../components/bookmarkButton/Bookmark-Button'

const MoviesPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [favorites, setFavorites] = useState([])

    const moviesDb = useSelector(selectAllMovies)

    const addFavorites = (movie) => {
      // console.log(movie.title)
      let  newFavoriteMovieList =[]
      if (!favorites.includes(movie)) {
        newFavoriteMovieList = [...favorites, movie]
      }
      else {
        newFavoriteMovieList=[...favorites]
      }
      setFavorites(newFavoriteMovieList)
    }

    const SearchMovie = (searchValue) => {
      setSearchTerm(searchValue)
      // console.log(searchTerm)
    }
    console.log(favorites)
  return (
    <MoviePageContainer>
     <MovieContainer>
    <Search searchTerm={searchTerm} setSearchTerm ={setSearchTerm} handleSearch={SearchMovie}/>
        <Movies searchTerm={searchTerm} moviesDb={moviesDb}  BookmarkButton={ BookmarkButton} handleFavorite={addFavorites}/>
        </MovieContainer>
    </MoviePageContainer>
  )
}

export default MoviesPage