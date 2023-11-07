//imports react
import React from 'react';

//function component named Stars taking props as an argument
function Stars({stars}) {
  const starNumbers = [1, 2, 3, 4, 5];

  return (
    <>
    <div className="d-flex justify-content-center">
      {starNumbers.map((starValue) => (
        <span
          key={starValue}
          className={`star ${starValue <= stars ? 'fill' : ''}`}
        >
          &#9733;
        </span>
      ))}
    </div></>
  );
};

//exporting the Stars component
export default Stars;