import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "../Header/Header";
import logo from "../../starter-code/assets/shared/logo.svg";
// import "./Header.css";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <Header />

        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <div className="bottom-text">
                <p className="line1">So you want to travel to</p>
                <h2 className="space">Space</h2>
                <p className="space-desc">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
            </Grid>
            <Grid item md={6} xs={12} className="flex">
              <div className="explore">EXPLORE</div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
