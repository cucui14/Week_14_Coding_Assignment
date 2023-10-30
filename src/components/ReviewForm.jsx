function ReviewForm() {
    
    return (
        <>
            <div className="mb-3">
                <label htmlFor={"exampleFormControlInput1"} className="form-label">Full Name</label>
                <input type={"text"} className="form-control" id={"exampleFormControlInput1"} placeholder={"John Smith"}></input>
            </div>
            <div className="mb-3">
                <label htmlFor={"exampleFormControlTextarea1"} className="form-label">Review</label>
                <textarea className="form-control" id={"exampleFormControlTextarea1"} rows={"3"}></textarea>
            </div>
            <select className="form-select" aria-label={"Default select example"}>
                <option value={"0"}>Choose a rating</option>
                <option value={"1"}>One</option>
                <option value={"2"}>Two</option>
                <option value={"3"}>Three</option>
                <option value={"4"}>Four</option>
                <option value={"5"}>Five</option>
            </select>
        </>
    )
}



export default ReviewForm;