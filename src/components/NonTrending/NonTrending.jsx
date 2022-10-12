import { LoadingState, ShowError } from '../../redux/Features/ShowSlice'

import { useParams } from 'react-router-dom'
import MovieIcon from '/assets/icon-nav-movies.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import {
    NonTrendingContainer, NonTrendingCard ,
    NonTrendingImage,
    NonTrendingShowDetails, 
    NonTrendingShowTitle,
    ShowText,
    BookmarkIconContainer,
Details } from './NonTrending.styles'

const NonTrending = ({ nonTrendingDb, searchTerm, handleFavorite ,BookmarkButton }) => {
    const nonTrending = nonTrendingDb.filter((nt) => nt.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log(nonTrending)


    return (
        <>
            <NonTrendingContainer>

                {
                    nonTrending.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <NonTrendingCard key={index}>
                                <NonTrendingImage src={thumbnail.regular.small} alt={title} />
                                <BookmarkButton handleFavorite={handleFavorite} trend={trend} />
                               
                                <NonTrendingShowDetails>
                                    <Details>
                                        <ShowText>
                                            {year} .
                                        </ShowText>
                                        {category === 'Movie' ? 
                                        (
                                            <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
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
                                    <NonTrendingShowTitle>
                                        {title}
                                    </NonTrendingShowTitle>
                                </NonTrendingShowDetails>
                            </NonTrendingCard>
                        )
                    })
                }

            </NonTrendingContainer>
        </>

    )
}
export default NonTrending