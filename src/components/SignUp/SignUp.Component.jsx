import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignUpButton, Form, Input, InputBox, Label, SignUpCard, SignUpHeader, SignUpFooter } from './SignUp.styles'

const SignUpComponent = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })

    const { email, password, confirmPassword } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();


    }
    return (
        <SignUpCard>

            <SignUpHeader>
                SignUp
            </SignUpHeader>
            <Form onSubmit={handleSubmit}>
                <InputBox>
                    <Label> Email Address

                    </Label>
                    <Input type='text' name='email' id='email' value={email} onChange={handleChange} required />
                </InputBox>



                <InputBox>
                    <Label> Password</Label>
                    <Input type='password' name='password' id='password' value={password} onChange={handleChange} required />

                </InputBox>
                <InputBox>
                    <Label> Repeat Password</Label>
                    <Input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={handleChange} required />

                </InputBox>

                <SignUpButton>
                   Create an account
                </SignUpButton>

                <SignUpFooter>
                    <p style={{ color: '#fff' }}>Already Have an account?</p>
                    <Link to='/signin' style={{ color: '#fc4747', textDecoration: 'none' }}>
                        Sign In
                    </Link>
                </SignUpFooter>


            </Form>
        </SignUpCard>

    )
}

export default SignUpComponent