import React from "react";
import SingleDestination from "../Destination/SingleDestination";
import "./DestinationMapping.css";
import data from "../../starter-code/data";
const DestinationMapping = ({ moon }) => {
  console.log("destin", moon);
  return (
    <div>
      {moon ? (
        <SingleDestination
          title={moon.name}
          desc={moon.description}
          distance={moon.distance}
          time={moon.travel}
        />
      ) : (
        <SingleDestination
          title={data.destinations[0].name}
          desc={data.destinations[0].description}
          distance={data.destinations[0].distance}
          time={data.destinations[0].travel}
        />
      )}
    </div>
  );
};

export default DestinationMapping;
