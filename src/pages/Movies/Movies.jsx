import React ,{useState} from 'react'
import Movies from '../../components/Movies/Movies.component'
import Search from '../../components/Search/Search.component'
import { MoviePageContainer, MovieContainer } from './Movies.styles'

const MoviesPage = () => {
  return (
    <MoviePageContainer>
     <MovieContainer>
    <Search/>
        <Movies />
        </MovieContainer>
    </MoviePageContainer>
  )
}

export default MoviesPage