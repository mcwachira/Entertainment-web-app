import { selectAllTvShows, LoadingState, ShowError } from '../../redux/Features/ShowSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import {
    TvShowsContainer, TvShowsCard,
    TvShowsImage,
    TvShowsShowDetails,
    TvShowsShowTitle,
    ShowText,
    BookmarkIconContainer,
    Details
} from './TvShows.styles'

const TvShows = () => {
    const TvShowsData = useSelector(selectAllTvShows)
    console.log(TvShowsData)


    return (
        <>
            <TvShowsContainer>

                {
                    TvShowsData.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <TvShowsCard key={index}>
                                <TvShowsImage src={thumbnail.regular.small} alt={title} />
                                <BookmarkIconContainer>
                                    <img src={BookmarkIcon} alt="book mark" />
                                </BookmarkIconContainer>

                                <TvShowsShowDetails>
                                    <Details>
                                        <ShowText>
                                            {year} .
                                        </ShowText>
                                        {category === 'TvShows' ?
                                            (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                    <img src={TvShowsIcon} alt='TvShows' style={{ fill: '#fff' }} />
                                                    <ShowText>TvShows</ShowText>
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
                                    <TvShowsShowTitle>
                                        {title}
                                    </TvShowsShowTitle>
                                </TvShowsShowDetails>
                            </TvShowsCard>
                        )
                    })
                }

            </TvShowsContainer>
        </>

    )
}
export default TvShows