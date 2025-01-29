import React from 'react'

const MovieCard = ({searchMovies}) => {
  return (
    <>
      <div className='movie' onClick={() => window.open(`https://www.imdb.com/title/${searchMovies.imdbID}`, '_blank')}>
          <div>
              <p>{searchMovies.Year}</p>
          </div>
          <div>
              <img src={searchMovies.Poster !== 'N/A' ? searchMovies.Poster : "https://placehold.co/400x600"} alt={searchMovies.Title} />
          </div>
          <div>
              <span>{searchMovies.Type}</span>
              <h3>{searchMovies.Title}</h3>
          </div>
      </div>
    </>
  )
}

export default MovieCard;