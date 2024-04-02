import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieTailorcontainer from './MovieTailorcontainer'
import MovieListContainer from './MovieListContainer'


const Browse = () => {
  const user = useSelector((store) => store.app.user)
  const nevigate = useNavigate();

  useEffect(() => {
    if (!user) {
      nevigate("/")
    }
  })

  return (
    <div>
      <Header />
      <div>
        <MovieTailorcontainer />
        <MovieListContainer /> 
      </div>

    </div>
  )
}

export default Browse