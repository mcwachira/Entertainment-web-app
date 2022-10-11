import React from 'react'
import Navbar from '../Navbar/Navbar-component'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './Layout.styles'
import Search from '../Search/Search.component'

const Layout = () => {
  return (
   <LayoutContainer>
    <Navbar/>
    {/* <Outlet/> */}
   </LayoutContainer>
  )
}

export default Layout