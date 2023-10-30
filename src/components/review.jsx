import React from "react";
import Stars from './Stars';

function Review(props) {
    const review = props.review;
    const stars = props.review.starsgiven;
    
    return (
        <>
            <div className="border-top border-secondary p-3">
                <p>{review.name}</p>
                <p>{review.review}</p>
                <Stars stars={stars} />
            </div>
        </>
    )
}

export default Review;