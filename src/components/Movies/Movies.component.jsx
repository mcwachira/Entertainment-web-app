import { useState } from 'react'
import { selectAllMovies, LoadingState, ShowError } from '../../redux/Features/ShowSlice'
import Search from '../Search/Search.component'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import MovieIcon from '/assets/icon-nav-movies.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import {
    MovieContainer, MovieCard,
    MovieImage,
    MovieShowDetails,
    MovieShowTitle,
    ShowText,
    BookmarkIconContainer,
    BookmarkImage ,
    Details
} from './Movies.styles'

const Movies = ({ searchTerm, BookmarkButton , moviesDb, handleFavorite}) => {
    // console.log(moviesDb)

    // const moviesDb= useSelector(selectAllMovies)
    // console.log(moviesDb)

    const moviesData = moviesDb.filter((movie) => (movie.title.toLowerCase().includes(searchTerm.toLowerCase())))
    // console.log(moviesData)


console.log(searchTerm)


    return (
        <>
        {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
            <MovieContainer>

                {
                    moviesData.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend
                 

                        return (
                            <MovieCard key={index}>
                                <MovieImage src={thumbnail.regular.small} alt={title} />
                                
                     
                                    <BookmarkButton trend={trend}/>
                          

                                <MovieShowDetails>
                                    <Details>
                                        <ShowText>
                                            {year} .
                                        </ShowText>
                                        {category === 'Movie' ?
                                            (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <img src={MovieIcon} alt='movie' style={{ fill: '#fff' }} />
                                                    <ShowText>Movie</ShowText>
                                                </div>)
                                            : (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <img src={TvIcon} alt='Tv show' />
                                                    <ShowText>
                                                        Tv Shows
                                                    </ShowText>

                                                </div>
                                            )
                                        }

                                        <ShowText>
                                            {rating} .
                                        </ShowText>
                                    </Details>
                                    <MovieShowTitle>
                                        {title}
                                    </MovieShowTitle>
                                </MovieShowDetails>
                            </MovieCard>
                        )
                    })
                }

            </MovieContainer>
        </>

    )
}
export default Movies