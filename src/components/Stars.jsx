//imports react
import React from 'react';

//function component named Stars taking props as an argument
function Stars(props) {
  //props added to rating variable
  const rating = props.stars;
  //array of 5 numbers added to starNumbers variable
  const starNumbers = [1, 2, 3, 4, 5];

  //component Stars returns a div with the following inside:
  //mapping thorugh starNumbers variable and adding class of fill to the stars the match the number of rating of the movie and not adding that class otherwise
  return (
    <>
    <div className="d-flex justify-content-center">
      {starNumbers.map((starValue) => (
        <span
          key={starValue}
          className={`star ${starValue <= rating ? 'fill' : ''}`}
        >
          &#9733;
        </span>
      ))}
    </div></>
  );
};

//exporting the Stars component
export default Stars;