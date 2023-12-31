//imports useStae from react
import { useState } from "react";

//function component named ReviewForm taking props as an argument
function ReviewForm({movie, setMovieReviews}) {

    const parentId = movie.movieId;
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [starsgiven, setStarsGiven] = useState(parseInt('0'));

    function handleClick() {
        let sortedReviews = movie.reviews.sort((a, b) => { return a.id - b.id });
        let lastId = sortedReviews[sortedReviews.length - 1].id;
        let id = lastId + 1;
        let newReview = { parentId, id, name, review, starsgiven }
        let updatedReviews = movie.reviews.push(newReview);
        setMovieReviews(updatedReviews);
        console.log(updatedReviews);
    }
    
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