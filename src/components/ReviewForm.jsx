//imports useStae from react
import { useState } from "react";

//function component named ReviewForm taking props as an argument
function ReviewForm(props) {
    //movie reviews added to movieReviews variable
    const movieReviews = props.movieReviews;
    //movie Id of each movie added to parentId variable
    const parentId = props.movie.movieId;

    //useState to set the name of reviewer
    const [name, setName] = useState('');
    //useStae to set a new review
    const [review, setReview] = useState('');
    //useState to set the stars of a new review
    const [starsgiven, setStarsGiven] = useState('0')

    //handleClick function for when a new review id submitted
    function handleClick() {
        //newReview variable takes parentId, name, reviews and stars given as an object
        const newReview = { parentId, name, review, starsgiven }
        //pushes newReview to movieReviews
        movieReviews.push(newReview);
        //logs to the console movieReviews to check the new review was added
        console.log(movieReviews);
    }
    
    //ReviewForm component returns a bootstrap form to enter a new review
    return (
        <>
                <label
                    htmlFor={"exampleFormControlInput1"} className="form-label"
                >Full Name</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"exampleFormControlInput1"}
                    placeholder={"John Smith"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor={"exampleFormControlTextarea1"} className="form-label">Review</label>
                <textarea
                    className="form-control mb-3"
                    id={"exampleFormControlTextarea1"}
                    rows={"3"}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
            <select
                className="form-select"
                aria-label={"Default select example"}
                value={starsgiven}
                onChange={(e) => setStarsGiven(e.target.value)}>
                <option value={0}>Choose a rating</option>
                <option value={1}>&#9733;</option>
                <option value={2}>&#9733;&#9733;</option>
                <option value={3}>&#9733;&#9733;&#9733;</option>
                <option value={4}>&#9733;&#9733;&#9733;&#9733;</option>
                <option value={5}>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
            <button
                type={"button"}
                className="btn btn-primary mt-3"
                onClick={handleClick}
                data-bs-dismiss={"modal"}
                >Submit review</button>
        </>
    )
}


//exports ReviewForm component
export default ReviewForm;