import React , {useState} from 'react'
import { SearchBox, SearchIcon } from './Search.styles'
import IconSearch from '/assets/icon-search.svg'

const Search = ({searchTerm, setSearchTerm , handleSearch}) => {

    // const[search, setSearch] = useState("")
   


  return (
    <>

      <SearchBox type='text' placeholder='Search for movies or Tv series' value={searchTerm || ""} onChange={(e) => handleSearch(e.target.value)} />
          <SearchIcon src={IconSearch} alt='search icon'  />
    </>

  
  )
}

export default Search