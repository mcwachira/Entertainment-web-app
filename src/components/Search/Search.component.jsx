import React , {useState} from 'react'
import { SearchBox, SearchIcon } from './Search.styles'
import IconSearch from '/assets/icon-search.svg'
import { useDispatch , useSelector} from 'react-redux'
import { setShowSearchTerm } from '../../redux/Features/ShowSlice'

const Search = () => {

  const searchTerm = useSelector((state) => state.shows.searchTerm)
  const dispatch = useDispatch()

  return (
    <>

      <SearchBox type='text' placeholder='Search for movies or Tv series' value={searchTerm || ""} 
      onChange={(e) => dispatch(setShowSearchTerm(e.target.value))} />
          <SearchIcon src={IconSearch} alt='search icon'  />
    </>

  
  )
}

export default Search