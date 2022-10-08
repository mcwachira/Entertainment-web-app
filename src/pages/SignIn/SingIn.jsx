import React from 'react'
import { SignInComponent } from './SingIn-styles'
import LoginComponent from '../../components/Login/Login.component'
import LogoIcon  from   '../../assets/logo.svg'
const SingIn = () => {
  return (
    <SignInComponent>
    <img src={LogoIcon} alt="logo"  style={{margin: '5rem auto'}}/>
<LoginComponent/>

    </SignInComponent>
  )
}

export default SingIn