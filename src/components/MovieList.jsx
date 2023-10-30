import React, { useState } from 'react';
import Movie from "./Movie";
import NewModal from './NewModal';

function MovieList(props) {
  const allMovies = props.movies;

  const [movieTitle, setMovieTitle] = useState('')
  
  function newReviewModal(id) {
    allMovies.map((movie) => {
    if (movie.movieId === id) {
         setMovieTitle(movie);
       }
  })
  }

  return (
    <>
      <div className='m-5 fs-1 fw-bold text-primary'>Movies</div>
      <div>
        <NewModal movieTitle={ movieTitle } />
        {allMovies.map((movie) => (
          <Movie movie={movie} key={movie.movieId} newReviewModal={newReviewModal} />
        ))}
      </div>
    </>
  );
}

export default MovieList;