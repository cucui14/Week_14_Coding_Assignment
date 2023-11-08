//imports react
import React from "react";
//imports Stars component
import Stars from './Stars';

//function component named Review takes props as an argument
function Review({review}) {
    

    return (
        <>
            <div className="border-top border-secondary p-3">
                <p>{review.name}</p>
                <p>{review.review}</p>
                <Stars stars={review.starsgiven} />
            </div>
        </>
    )
}

//exports Review component
export default Review;