import React from 'react'
import { HomePageContainer, HomeContainer } from './Home.styles'
import Navbar from '../../components/Navbar/Navbar-component'

const Home = () => {
  return (
   <>
    <HomePageContainer>
    <Navbar/>
        <HomeContainer>
           <h2>
            Search
           </h2>

          <h2>Home</h2>
        </HomeContainer>

    </HomePageContainer>
   </>
  )
}

export default Home