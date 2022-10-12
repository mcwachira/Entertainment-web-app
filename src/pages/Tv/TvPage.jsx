import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { TvPageContainer, TvContainer } from './TvPage.styles'
import TvShows from '../../components/TvShows/TvShows'
import Search from '../../components/Search/Search.component'


const TvPage = () => {




  return (
    <TvPageContainer>

    <TvContainer>
        <Search/>
        <TvShows  />
    </TvContainer>
    </TvPageContainer>
  )
}

export default TvPage