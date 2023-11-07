//importing React
import React from 'react';
//importing Stars component
import Stars from './Stars'
//importing ReviewList component
import ReviewList from './ReviewList';

//function Movie component receiving props as an argument
function Movie({ movie, newReviewModalTitle }) {

  let totalStars = 0;
  for (const review of movie.reviews) {
    totalStars += review.starsgiven;
  }

  const stars = totalStars / movie.reviews.length;

    return (
      <>
        <div className='m-3 mx-md-auto' style={{'maxWidth' : '800px'}}>
            <img src={movie.movieposter} alt={`${movie.moviename} movie poster`} width={"200px"}/>
          <h3 className='fs-5 m-1'>{movie.moviename}</h3>
          <Stars stars={stars} />
          <ReviewList movie={movie} newReviewModalTitle={newReviewModalTitle} />
        </div>
      </>
    )
}

//exports Movie component
export default Movie;