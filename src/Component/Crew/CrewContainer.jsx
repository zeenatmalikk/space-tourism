import React from "react";
import Header from "../Header/Header";
import { Grid } from "@mui/material";
import CrewPage from "./CrewPage";
import crew from "../../starter-code/assets/crew/image-anousheh-ansari.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Crew.css";
import { Carousel } from "react-responsive-carousel";
import data from "../../starter-code/data.json";
const CrewContainer = () => {
  return (
    <div className="crew">
      <Header />
      <p className="crew-pointer">
        <span className="crew-point">02</span>
        Meet your crew
      </p>
      <Carousel>
        {data.crew.map((item) => (
          <Grid container>
            <Grid item md={1} />
            <Grid
              item
              md={5}
              xs={12}
              className="crew-content-container"
              style={{
                flexDirection: "column",
                height: "80vh",
              }}
            >
              <CrewPage item={item}/>
            </Grid>
            <Grid item md={5} xs={12} className="crew-img-container">
              <img src={crew} alt="" className="crew-images" />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};

export default CrewContainer;
