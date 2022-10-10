import React from 'react'
import {TrendingShows, LoadingState, ShowError   } from '../../redux/Features/ShowSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookmarkIcon from '/assets/icon-nav-bookmark.svg'
import MovieIcon from '/assets/icon-nav-movies.svg'
import TvIcon from '/assets/icon-nav-tv-series.svg'
import { TrendingContainer, TrendingCard, TrendingImage, TrendingShowDetails, TrendingShowTitle, Details, ShowText } from './Trending.styles'


const TrendingComponent = () => {
    const trending = useSelector(TrendingShows)
   

  return (
    <>
        <TrendingContainer>
        
        {
            trending.map((trend , index ) => {
                const { title, category, thumbnail, year, rating } = trend
                
                return(
                    <TrendingCard key={index}>
                        <TrendingImage src={thumbnail.trending.large} alt={title} />
                        <TrendingShowDetails>
                        <Details>
                            <ShowText>
                                {year} .
                            </ShowText>
                                {category === 'Movie' ? (<img src={MovieIcon} alt='movie' style={{fill:'#fff'}} />) : (<img src={TvIcon} alt='Tv show' />) }

                                <ShowText>
                                    {rating} .
                                </ShowText>
                        </Details>
                            <TrendingShowTitle>
                                {title}
                            </TrendingShowTitle>
                        </TrendingShowDetails>
                    </TrendingCard>
                )
            })
        }

        </TrendingContainer>
    </>
 
  )
}

export default TrendingComponent