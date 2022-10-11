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
/* justify-content: space-around; */
margin: 1rem 0;
`

export const BookmarkIconContainer = styled.div`
width: 20px;
height: 20px;
position: absolute;
/* top: 17rem;
right: 1rem; */

background-color: #111;
`