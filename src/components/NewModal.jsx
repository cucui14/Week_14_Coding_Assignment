//importing React
import React from "react";
//importin ReviewForm component
import ReviewForm from "./ReviewForm";

//function component named NewReviewModal taking props as an argument
function NewReviewModal(props) {
    //name of each movie added to movieTitle variable
    const movieTitle = props.movieTitle.moviename
    //reviews of each movie added to movieReviews variable
    const movieReviews = props.movieReviews;
    //movieTitle is each movie and added to a movie variable
    const movie = props.movieTitle;
    
    //NewReviewModal component returns a bootstrap modal with ReviewForm component in it taking movieReviews movie as props
    return (
        <>
            <div className="modal fade" id={"exampleModal"} tabIndex={"-1"} aria-labelledby={"exampleModalLabel"} aria-hidden={"true"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={"exampleModalLabel"}>{ movieTitle }</h1>
                            <button type={"button"} className="btn-close" data-bs-dismiss={"modal"} aria-label={"Close"}></button>
                        </div>
                        <div className="modal-body">
                            <ReviewForm movieReviews={movieReviews} movie={movie} />
                        </div>
                        <div className="modal-footer">
                            <button type={"button"} className="btn btn-secondary" data-bs-dismiss={"modal"}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//exports NewReviewModal component
export default NewReviewModal;