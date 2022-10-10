import React from 'react'
import { SignUpPage } from './SignUp.styles'
import SignUpComponent from '../../components/SignUp/SignUp.Component'
import LogoIcon from '/assets/logo.svg'

const SignUp = () => {
  return (
   <>
    <SignUpPage>
              <img src={LogoIcon} alt="logo" style={{ margin: '5rem auto' }} />
        <SignUpComponent/>
    </SignUpPage>
   </>
  )
}

export default SignUp