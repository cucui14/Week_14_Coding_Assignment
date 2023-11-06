//import react and useState
import React, { useState } from 'react';
//import Movie component
import Movie from "./Movie";
//import NewModal component
import NewModal from './NewModal';

//function component named MovieList passing props
function MovieList(props) {
  //prop received added to allMovies variable
  const allMovies = props.movies;

  //useState added to movieTitle variable with setMovieTitle function
  const [movieTitle, setMovieTitle] = useState('')
  //useState added to movieReviews variable with setmovieReviews function
  const [movieReviews, setmovieReviews] = useState('')
  
  //function named newReviewModal with id as an argument. movieTitle and movieReviews are been passed to NewModal component as a prop
  function newReviewModal(id) {
    //mapping through allMovies
    allMovies.map((movie) => {
    //if the id of any of the movies matches with the id been passed setMovieTitle and setmovieReviews are set
    if (movie.movieId === id) {
      setMovieTitle(movie);
      setmovieReviews(movie.reviews)
       }
  })
  }

  //MovieList component returns a title as movies, NewModal component, maps through allMovies and and creates a new Movie component for each while passing movie, key and newReviewModal to each.
  return (
    <>
      <div className='m-5 fs-1 fw-bold text-primary'>Movies</div>
      <div>
        <NewModal movieTitle={movieTitle} movieReviews={movieReviews} />
        {allMovies.map((movie) => (
          <Movie movie={movie} key={movie.movieId} newReviewModal={newReviewModal} />
        ))}
      </div>
    </>
  );
}

//exports MovieList component
export default MovieList;