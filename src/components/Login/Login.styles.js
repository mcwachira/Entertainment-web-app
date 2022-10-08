import styled from "styled-components";

export const LoginCard = styled.div`

background-color:#161d2f;
width: 400px;
height: 3y60px;
border-radius:15px;


`

export const LoginHeader = styled.h1`
color: #fff;
font-weight: 300;
margin: 3rem 1.5rem;
margin-bottom: 1rem;
`
export const Form = styled.form`

display:flex;
flex-direction: column;


`
export const InputBox = styled.div`
display:flex;
flex-direction: column;
margin:.5rem 2rem;
justify-content: center;
`

export const Label = styled.label`
color: #fff;
margin: 1rem .5rem;
margin-bottom:.1rem;
`
export const Input = styled.input`
border: none;
background: none;
outline: none;
  margin: 0;
  outline: 0;
  vertical-align: middle;
border-bottom: 1px solid #fff;

`

export const LoginButton = styled.button`
margin:2rem 1rem;
padding: 1rem 2rem;
background-color: #fc4747;
color: #fff;
border-radius: 10px;

&:hover{
    background-color: #fff;
    color:#000
}

`

export const LoginFooter = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: -1rem;
margin-bottom :2rem;

`