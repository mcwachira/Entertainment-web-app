import BookmarkButton from '../bookmarkButton/Bookmark-Button'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import {
    BookMarkedContainer, BookMarkedCard,
    BookMarkedImage,
    BookMarkedShowDetails,
    BookMarkedShowTitle,
    ShowText,
    BookmarkIconContainer,
    Details
} from './BookMarkedShows-styles'

const BookMarkedShows = () => {


    return (
        <>
            <BookMarkedContainer>

                {
                    BookMarkedData.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <BookMarkedCard key={index}>
                                <BookMarkedImage src={thumbnail.regular.small} alt={title} />
                                <BookmarkButton />

                                <BookMarkedShowDetails>
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
                                </BookMarkedShowDetails>
                            </BookMarkedCard>
                        )
                    })
                }

            </BookMarkedContainer>
        </>

    )
}
export default BookMarkedShow