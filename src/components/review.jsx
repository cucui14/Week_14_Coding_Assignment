//imports react
import React from "react";
//imports Stars component
import Stars from './Stars';

//function component named Review takes props as an argument
function Review(props) {
    //review props added to review variable
    const review = props.review;
    //starggiven of each review added to stars variable
    const stars = props.review.starsgiven;
    
    //Review component returns a div with the name of the reviewer coming from review prop, the review and the Stars component passing the stars as props
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

//exports Review component
export default Review;