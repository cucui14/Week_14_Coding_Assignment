//importing React
import React from 'react';
//importing Stars component
import Stars from './Stars'
//importing ReviewList component
import ReviewList from './ReviewList';

//function Movie component receiving props as an argument
function Movie(props) {
  //prop received added to movie variable
  const movie = props.movie;
  //prop received added to newReviewModal variable
  const newReviewModal = props.newReviewModal; 
  //prop received added to allReviews variable
  const allReviews = props.movie.reviews;

  //variable totalStars set to 0
  let totalStars = 0;
  //for loop takes allReviews and adds the starts of each review to totalStars variable
  for (const review of allReviews) {
    totalStars += review.starsgiven;
  }
  //devides totalStars by the length of all of each movie
  const stars = totalStars / allReviews.length;


  //Movie component returns a div for each movie with an image(taking movie.movieposter as a prop), movie title from movie.moviename, Stars component(taking stars as prop), and ReviewList component(taking movie and newReviewModal as props)
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

//exports Movie component
export default Movie;