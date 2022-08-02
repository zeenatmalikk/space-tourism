import { Grid } from "@mui/material";
import React from "react";
import techimage from "../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import data from "../../starter-code/data.json"
import "./Technologies.css";
const Technologies = ({ tech }) => {
console.log(tech);
  console.log("immmm",tech.images);
  const techim=tech.images
  return (
    <div>
     {
        tech?(
            <Grid container className="techn" style={{ paddingLeft: "20px" }}>
            <Grid
              item
              md={6}
              xs={12}
              className="technology-container"
              style={{ flexDirection: "column" }}
            >
              <div>
                <h1 className="tech-name">{tech.name}</h1>
                <p className="tech-desc">{tech.description} </p>
              </div>
            </Grid>
            <Grid item md={6} xs={12} className='tech-img-container'>
              <img className="tech-image" src={techimage} alt="" />
            </Grid>
          </Grid>
        ):(
            <Grid container style={{ paddingLeft: "20px" }}>
            <Grid
              item
              md={8}
              xs={12}
              className="technology-container"
              style={{ flexDirection: "column" }}
            >
              <div>
                <h1 className="tech-name">{data.technology[0].name}</h1>
                <p className="tech-desc">{data.technology[0].description} </p>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <img className="tech-image" src={techimage} alt="" />
            </Grid>
          </Grid>
        )
     }
    </div>
  );
};

export default Technologies;
