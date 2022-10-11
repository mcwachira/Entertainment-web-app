import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLogo, NavLinks, NavAvatar, NavLink } from './Navbar.styles'
import Logo from '/assets/logo.svg'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import MovieIcon from '/assets/icon-nav-movies.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import HomeIcon from '/assets/icon-nav-home.svg'
import AvatarIcon from '/assets/image-avatar.png'
import { Outlet } from 'react-router-dom'
 
const Navbar= () => {
  return (
    <>


   <Nav>
    <NavLogo>
<img src={Logo} alt="logo" />
    </NavLogo>

    <NavLinks>

<NavLink to='/'>
                  <img src={HomeIcon} alt="home" /> 
</NavLink>
              <NavLink to='/movies'>
                <img src={MovieIcon} alt="movies" />
              </NavLink>
              <NavLink to='/tv'>
                <img src={TvIcon} alt="tv shows" />
              </NavLink>
              <NavLink to='/bookmarked'>
                <img src={BookmarkIcon} alt="book mark" />
              </NavLink>

    </NavLinks>

          <NavAvatar>
<img src={AvatarIcon} alt="avatar" />
          </NavAvatar>
   </Nav>

   <Outlet/>
    </>
  )
}


export default Navbar