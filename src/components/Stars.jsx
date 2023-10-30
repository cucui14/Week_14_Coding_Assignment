import React from 'react';

function Stars(props) {
  const rating = props.stars;
  const starNumbers = [1, 2, 3, 4, 5];

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

export default Stars;