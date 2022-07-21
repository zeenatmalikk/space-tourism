import { Grid } from "@mui/material";
import React, { useState } from "react";
import DestinationMapping from "../DestinationsMap/DestinationMapping";
import "./Destination.css";
import data from "../../starter-code/data";
import imageMoon from "../../starter-code/assets/destination/image-moon.png";
import Header from "../Header/Header";
const Destination = () => {
  const [moon, setmoon] = useState("");

  const handleMoon = (item) => {
    setmoon(item);
  };

  return (
    <div className="destination">
      <Header/>
      <Grid container>
        <Grid item md={6} xs={12} className="destination-flex">
          <div className="destination-title">
            <h1 className="choose-destination">
              <span className="pointer">01</span> Pick your destination
            </h1>
            <img
              className="images-dest"
              src={imageMoon}
              alt=""
              width="300px"
              height="300px"
            />
          </div>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          className="destination-flex"
          style={{ flexDirection: "column" }}
        >
          <div className="destination-names">
            {data.destinations.map((item) => {
              return (
                <>
                  <button className="btn-dest" onClick={() => handleMoon(item)}>
                    {item.name}
                  </button>
                </>
              );
            })}
          </div>
          <DestinationMapping moon={moon} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;
