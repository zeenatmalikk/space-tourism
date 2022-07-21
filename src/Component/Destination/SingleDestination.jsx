import React from "react";
import "./SingleDestination.css";
const SingleDestination = ({ title, desc, distance, time }) => {
  return (
    <div className="single-dest">
      <h2 className="dest-name">{title}</h2>
      <p className="dest-desc">{desc}</p>
      <div className="flex-time-dist">
        <div className="distance-dest">
          <p>avg.distance</p>
          <h3>{distance}</h3>
        </div>
        <div className="distance-dest">
          <p>est. travel time</p>
          <h3>{time}</h3>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
