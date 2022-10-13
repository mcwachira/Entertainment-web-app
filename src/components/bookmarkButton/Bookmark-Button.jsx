import React, {useState} from 'react'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { addToFavorites, removeFromFavorites } from '../../redux/Features/ShowSlice'
import { BookmarkIconContainer  , BookmarkImage} from './Bookmark-Button.styles'
const BookmarkButton = ({ trend }) => {

  const dispatch = useDispatch()
  const location = useLocation()
  
  return (
    <>
      <BookmarkIconContainer onClick={() => location.pathname === '/bookmarked' ? dispatch(removeFromFavorites(trend)) : dispatch(addToFavorites(trend))}>
              <BookmarkImage src={BookmarkIcon} alt="book mark" />
    </BookmarkIconContainer>

    </>
  )
}

export default BookmarkButton