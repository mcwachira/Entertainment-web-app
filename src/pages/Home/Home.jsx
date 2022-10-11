import React from 'react'
import { HomePageContainer, HomeContainer } from './Home.styles'
import Navbar from '../../components/Navbar/Navbar-component'
import Search from '../../components/Search/Search.component'
import data from '../../data/data.json'
import TrendingComponent from '../../components/Trending/Trending.component'
import NonTrending from '../../components/NonTrending/NonTrending'

const Home = () => {

    // const movies = data.map((movie) => (console.log(movie))) 
  return (
   <>
    <HomePageContainer>
    {/* <Navbar/> */}
        <HomeContainer>
          <Search/>

          <h2>Home</h2>
          <TrendingComponent />

          <h2>
            Recommended for you
          </h2>
          <NonTrending/>
        </HomeContainer>

    </HomePageContainer>
   </>
  )
}

export default Home