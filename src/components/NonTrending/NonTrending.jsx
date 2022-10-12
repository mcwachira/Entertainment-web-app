import { LoadingState, ShowError, selectAllNonTrendingShows } from '../../redux/Features/ShowSlice'
import BookmarkButton from '../bookmarkButton/Bookmark-Button'
import { useSelector } from 'react-redux'
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

const NonTrending = () => {
    const nonTrendingDb = useSelector(selectAllNonTrendingShows)
    const searchTerm = useSelector((state) => state.shows.searchTerm)
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
                                <BookmarkButton trend={trend} />
                               
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