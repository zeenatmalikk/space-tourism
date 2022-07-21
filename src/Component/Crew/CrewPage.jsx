import React from "react";
import "./Crew.css";
const CrewPage = ({item}) => {
  return (
    <div >
      {/* <Grid container>
        <Grid item md={6} xs={12}> */}
          <div className="crew-container">
            <div>
            <h2 className="crew-desig">{item.role}</h2>
            <h3 className="crew-name">{item.name}</h3>
            <p className="crew-desc">
             {item.bio}
            </p>
            </div>
          </div>
        {/* </Grid>
      </Grid> */}
    </div>
  );
};

export default CrewPage;
