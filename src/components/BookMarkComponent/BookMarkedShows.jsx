import { useEffect } from 'react'
import BookmarkButton from '../bookmarkButton/Bookmark-Button'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import { removeFromFavorites } from '../../redux/Features/ShowSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
    BookMarkedContainer, BookMarkedCard,
    BookMarkedImage,
    BookMarkedShowDetails,
    BookMarkedShowTitle,
    ShowText,
    BookmarkIconContainer,
    Details
} from './BookMarkedShows-styles'

const BookMarkedShows = ({favoritesDb, searchTerm}) => {
    const dispatch = useDispatch()
    
    const storedLocalStorage = JSON.parse(localStorage.getItem('show'))
    console.log(storedLocalStorage)

    const favoritesData =favoritesDb.length > 0 ? favoritesDb.filter((favorite) => (favorite.title.toLowerCase().includes(searchTerm.toLowerCase()))):storedLocalStorage

    //const favoritesData = storedLocalStorage
    console.log(favoritesData)
    return (
        <>
            <BookMarkedContainer>

                {
                    favoritesData.map((trend, index) => {
                        const { title, category, thumbnail, year, rating } = trend

                        return (
                            <BookMarkedCard key={index} >
                                <BookMarkedImage src={thumbnail.regular.small} alt={title} />
                                <BookmarkButton trend={trend}/>

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
                                    <BookMarkedShowTitle>
                                        {title}
                                    </BookMarkedShowTitle>
                                </BookMarkedShowDetails>
                            </BookMarkedCard>
                        )
                    })
                }

            </BookMarkedContainer>
        </>

    )
}
export default BookMarkedShows