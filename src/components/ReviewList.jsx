//importing react
import React from 'react';
//importing Review component
import Review from './review';

//function component named ReviewList
function ReviewList(props) {
    //props received added to movie variable
    const movie = props.movie;
    //props received added to newReviewModal variable
    const newReviewModal = props.newReviewModal;

    //Review List component returns a bootstrap accordion that takes movie.movieId for each accordion created for each movie, maps through the reviews of each movie and creates a Review component for each review passing review as a prop.
    return (
        <>
            <div className='accordion'>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-primary fw-bold" type={"button"} data-bs-toggle={"collapse"} data-bs-target={`#collapse${movie.movieId}`} aria-expanded={"false"} aria-controls={"collapseThree"}>
                        See reviews
                    </button>
                </h2>
                <div id={`collapse${movie.movieId}`} className="accordion-collapse collapse" data-bs-parent={"#accordionExample"}>
                    <div className="accordion-body">
                        {movie.reviews.map((review) => (
                            <Review review={review} key={review.id} />
                        ))}
                            <div className='border-top border-secondary p-3'>
                                <button
                                    onClick={(e) => newReviewModal(e.target.id)}
                                    id={movie.movieId}
                                    type={"button"} className="btn btn-primary"
                                    data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                                Enter review
                            </button>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

//exports ReviewList component
export default ReviewList;