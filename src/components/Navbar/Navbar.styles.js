import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav  = styled.div`
min-height: 100vh;
width: 100px;
border-radius: 15px;
margin:1rem 2rem;
background-color:#161d2f ;
display: flex;
flex-direction: column;

`

export const NavLogo = styled.div`
display: flex;
margin: 2rem auto;
justify-content: center;

`

export  const NavLinks = styled.div`

display: flex;
flex-direction: column;
gap: 2rem;
margin:5rem auto;
align-items: center;
`
export const NavLink =styled(Link)`

&:hover{
    fill:#fc4747;
}
&:active{
    background-color: white;
}

`

export const NavAvatar = styled.div`
margin-top: auto;
display: flex;
align-items: flex-end;
justify-content: center;
margin-bottom: 2rem;

`