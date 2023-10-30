import React from 'react';
import Stars from './Stars'
import ReviewList from './ReviewList';

function Movie(props) {
  const movie = props.movie;
  const newReviewModal = props.newReviewModal; 

  //movie average star rating function
  const allReviews = props.movie.reviews;
  let totalStars = 0;
  for (const review of allReviews) {
    totalStars += review.starsgiven;
  }
  const stars = totalStars / allReviews.length;

    return (
      <>
        <div className='m-3 mx-md-auto' style={{'maxWidth' : '800px'}}>
            <img src={movie.movieposter} alt={`${movie.moviename} movie poster`} width={"200px"}/>
          <h3 className='fs-5 m-1'>{movie.moviename}</h3>
          <Stars stars={stars} />
          <ReviewList movie={movie} newReviewModal={newReviewModal} />
        </div>
      </>
    )
}

export default Movie;