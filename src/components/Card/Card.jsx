import React from "react";

const Card = ({ name, imgSrc }) => {
  return (
    <div className="card">
      <img alt={name} src={imgSrc} />
      <div className="overlay">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
