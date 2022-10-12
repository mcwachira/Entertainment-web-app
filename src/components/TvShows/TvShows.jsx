import React from 'react'
import { selectAllTvShows } from '../../redux/Features/ShowSlice'
import { useSelector } from 'react-redux'
import BookmarkButton from '../bookmarkButton/Bookmark-Button'
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
    const searchTerm = useSelector((state) => state.shows.searchTerm)

    const TvShowsDb = TvShowsData.filter((tvShow) =>  tvShow.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <>
            <TvShowsContainer>

                {
                    TvShowsDb.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <TvShowsCard key={index}>
                                <TvShowsImage src={thumbnail.regular.small} alt={title} />
                                 <BookmarkButton trend={trend}/>

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