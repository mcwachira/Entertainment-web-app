import React from 'react'
import { HomePageContainer, HomeContainer } from './Home.styles'
import Navbar from '../../components/Navbar/Navbar-component'
import Search from '../../components/Search/Search.component'
import data from '../../data/data.json'

const Home = () => {

    const movies = data.map((movie) => (console.log(movie))) 
  return (
   <>
    <HomePageContainer>
    <Navbar/>
        <HomeContainer>
          <Search/>

          <h2>Home</h2>
        </HomeContainer>

    </HomePageContainer>
   </>
  )
}

export default Home