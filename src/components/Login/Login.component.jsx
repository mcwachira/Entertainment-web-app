import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { LoginButton, Form, Input, InputBox, Label, LoginCard, LoginHeader, LoginFooter } from './Login.styles'

const LoginComponent = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const {email, password} = formData

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        

    }
  return (
      <LoginCard>
    
          <LoginHeader>
            Login
          </LoginHeader>
          <Form onSubmit={handleSubmit}>
          <InputBox>
                  <Label> Email Address

                  </Label>
                  <Input type='text' name='email' id='email' value={email}  onChange={handleChange} required/>
          </InputBox>



<InputBox>
                  <Label> Password</Label>
                  <Input type='password' name='password' id='password' value={password} onChange={handleChange} required />

</InputBox>
             
             <LoginButton>
                Log in To Your Account
             </LoginButton>

             <LoginFooter>
                  <p style={{color:'#fff'}}>Don't Have an account?</p>
                  <Link to='/signup' style={{color:'#fc4747', textDecoration:'none'}}>
                    Sign Up
                  </Link>
             </LoginFooter>
           
           
          </Form>
      </LoginCard>
     
  )
}

export default LoginComponent