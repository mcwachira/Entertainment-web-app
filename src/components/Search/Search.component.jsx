import React , {useState} from 'react'
import { SearchBox, SearchIcon } from './Search.styles'
import IconSearch from '/assets/icon-search.svg'

const Search = () => {

    const[search, setSearch] = useState("")

    const handleChange = () => {

    }
  return (
    <>

          <SearchBox type='text' placeholder='Search for movies or Tv series'/>
          <SearchIcon src={IconSearch} alt='search icon' value={search} onChange={handleChange} />
    </>

  
  )
}

export default Search