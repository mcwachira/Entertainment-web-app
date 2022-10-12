import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { TrendingShows , selectAllNonTrendingShows } from '../../redux/Features/ShowSlice'
import { HomePageContainer, HomeContainer } from './Home.styles'
import Navbar from '../../components/Navbar/Navbar-component'
import Search from '../../components/Search/Search.component'
import data from '../../data/data.json'
import TrendingComponent from '../../components/Trending/Trending.component'
import NonTrending from '../../components/NonTrending/NonTrending'
import BookmarkButton from '../../components/bookmarkButton/Bookmark-Button'


const Home = () => {
  const trendingDb = useSelector(TrendingShows)
  const nonTrendingDb = useSelector(selectAllNonTrendingShows)
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState([])


  const addFavorites = (show) => {
    console.log(show.title)
    let newFavoriteMovieList = []
    if (!favorites.includes(show)) {
      newFavoriteMovieList = [...favorites, show]
    }
    else {
      newFavoriteMovieList = [...favorites]
    }
    setFavorites(newFavoriteMovieList)
  }


  const SearchTrending= (searchValue) => {
    setSearchTerm(searchValue)
    // console.log(searchTerm)
  }
  console.log(favorites)
  return (
   <>
    <HomePageContainer>
    {/* <Navbar/> */}
        <HomeContainer>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={SearchTrending}  />

          <h2>Home</h2>
          <TrendingComponent trendingDb={trendingDb} searchTerm={searchTerm} handleFavorite={addFavorites} BookmarkButton={BookmarkButton} />

          <h2>
            Recommended for you
          </h2>
          <NonTrending searchTerm={searchTerm} nonTrendingDb={nonTrendingDb} handleFavorite={addFavorites} BookmarkButton={BookmarkButton} />
        </HomeContainer>

    </HomePageContainer>
   </>
  )
}

export default Home