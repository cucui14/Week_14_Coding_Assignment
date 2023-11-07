//importing React
import React from "react";
//importin ReviewForm component
import ReviewForm from "./ReviewForm";

//function component named NewReviewModal taking props as an argument
function NewReviewModal({movie, setMovieReviews}) {
    

    return (
        <>
            <div className="modal fade" id={"exampleModal"} tabIndex={"-1"} aria-labelledby={"exampleModalLabel"} aria-hidden={"true"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={"exampleModalLabel"}>{ movie.moviename }</h1>
                            <button type={"button"} className="btn-close" data-bs-dismiss={"modal"} aria-label={"Close"}></button>
                        </div>
                        <div className="modal-body">
                            <ReviewForm movie={movie} setMovieReviews={setMovieReviews} />
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