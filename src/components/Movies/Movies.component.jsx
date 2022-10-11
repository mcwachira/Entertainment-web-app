import { selectAllMovies, LoadingState, ShowError } from '../../redux/Features/ShowSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import MovieIcon from '/assets/icon-nav-movies.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import {
    MovieContainer, MovieCard,
    MovieImage,
    MovieShowDetails,
    MovieShowTitle,
    ShowText,
    BookmarkIconContainer,
    Details
} from './Movies.styles'

const Movies = () => {
    const moviesData= useSelector(selectAllMovies)
    console.log(moviesData)


    return (
        <>
            <MovieContainer>

                {
                    moviesData.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <MovieCard key={index}>
                                <MovieImage src={thumbnail.regular.small} alt={title} />
                                <BookmarkIconContainer>
                                    <img src={BookmarkIcon} alt="book mark" />
                                </BookmarkIconContainer>

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