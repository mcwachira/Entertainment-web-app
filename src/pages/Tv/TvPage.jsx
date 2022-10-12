import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { TvPageContainer, TvContainer } from './TvPage.styles'
import { selectAllTvShows } from '../../redux/Features/ShowSlice'
import TvShows from '../../components/TvShows/TvShows'
import Search from '../../components/Search/Search.component'


const TvPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const TvShowsData = useSelector(selectAllTvShows)

  const SearchTv = (searchValue) => {
    setSearchTerm(searchValue)
    console.log(searchTerm)
  }

  return (
    <TvPageContainer>

    <TvContainer>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={SearchTv}  />
        <TvShows TvShowsData={TvShowsData} searchTerm={searchTerm} />
    </TvContainer>
    </TvPageContainer>
  )
}

export default TvPage