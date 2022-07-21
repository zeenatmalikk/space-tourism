import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "./SpaceLaunch.css";
import data from "../../starter-code/data.json";
import Technologies from "./Technologies";
import Header from "../Header/Header";
const SpaceLaunch = () => {
  const[tech,settech]=useState('')
const handleClick=(item)=>{
  settech(item)
}
  return (
    <div className="launch">
      <Header/>
      <div className="launch-container"> 
        <h1 className="space-launch">
          <span className="launch-pointer">03</span> Space Launch 101
        </h1>
      </div>
      <Container style={{display:'flex'}}>
        <div>
        {data.technology.map((item) => (
          <Grid container >
            <Grid item md={1} xs={12} className="number-container" >
              <div className="numbers" onClick={()=>handleClick(item)}>{item.id}</div>
            </Grid>
          </Grid>
        ))}
        </div>
        <Technologies tech={tech}/>
      </Container>
    </div>
  );
};

export default SpaceLaunch;
