import styled from 'styled-components';


export const  MovieContainer = styled.div`
margin-top: 2rem;
width: 100%;
display: grid;
grid-template-columns: repeat(3,400px);
`

export const  MovieCard = styled.div`



`

export const  MovieImage = styled.img`
border-radius: 10px;
height: 200px;
width: 300px;
position: relative;
`

export const  MovieShowDetails = styled.div`
margin: 1rem auto;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
`
export const  MovieShowTitle = styled.h2`
color: #fff;

`

export const ShowText = styled.p`
color: #fff;

`
export const Details = styled.div`
display: flex;
align-items:center;
gap: 3rem;

margin: 1rem 0;
`

export const BookmarkIconContainer = styled.button`
position: absolute;
/* margin:-12rem 1rem; */
margin:.5rem -4rem;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #111;
opacity: .8;
cursor: pointer;
outline: none;
border: none;
`

export const BookmarkImage = styled.img`
width: 100%;
`