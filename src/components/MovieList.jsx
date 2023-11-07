//import react and useState
import React, { useState } from 'react';
//import Movie component
import Movie from "./Movie";
//import NewModal component
import NewModal from './NewModal';

//function component named MovieList passing props
function MovieList({ allMovies }) {

  const [movieReviews, setMovieReviews] = useState('')
  const [movieModal, setMovieModal] = useState('')

  function newReviewModalTitle(id) {
    allMovies.map((movie) => {
    if (movie.movieId == id) {
      setMovieModal(movie);
       }
  })
  }

  return (
    <>
      <div className='m-5 fs-1 fw-bold text-primary'>Movies</div>
      <div>
        <NewModal movie={movieModal} setMovieReviews={setMovieReviews} />
        {allMovies.map((movie) => (
          <Movie movie={movie} key={movie.movieId} newReviewModalTitle={newReviewModalTitle} />
        ))}
      </div>
    </>
  );
}

//exports MovieList component
export default MovieList;