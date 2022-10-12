import React, {useState} from 'react'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import { BookmarkIconContainer  , BookmarkImage} from './Bookmark-Button.styles'
const BookmarkButton = ({ trend, handleFavorite }) => {

    const [movieDt, setMovieDt] = useState([])
    const handleClick = () => {
       
      handleFavorite(trend)
    }

  //  console.log(movieDt)
  return (
    <>
    <BookmarkIconContainer onClick={() => handleClick()}>
              <BookmarkImage src={BookmarkIcon} alt="book mark" />
    </BookmarkIconContainer>

    </>
  )
}

export default BookmarkButton