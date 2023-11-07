//importing react
import React from 'react';
//importing Review component
import Review from './review';

//function component named ReviewList
function ReviewList({ movie, newReviewModalTitle }) {

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
                                    onClick={(e) => newReviewModalTitle(e.target.id)}
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