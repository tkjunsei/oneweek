import React from "react";
import photo from '../assets/rough.jpg';

function Top() {
  return (
    <div className="top-container">
        <h1 className="top-header">創像工房 in front of.</h1>
        <p className="top-description">
            Welcome to our theater! We are dedicated to bringing you the best performances and experiences.
        </p>
        <img
            src={photo}
            alt="Theater"
            className="top-image"
        />
    </div>
  );
}

export default Top;
