import React from "react";
import Grid from "@material-ui/core/Grid";
// import ReactPlayer from "react-player";

import "../../styles/OurCoreWork/CoreWork.css";
import Ghandi from "../../images/LandingPage/OurCoreWork/ghandi-video.svg";

export default function OurCoreWork() {
  //   const videoURL = "";
  return (
    <Grid container className="core-container">
      <h3 className="core-header">Our Core Work</h3>
      <Grid container className="core-content">
        {/* <ReactPlayer className="video" url={videoURL} /> */}
        <img className="video" src={Ghandi} alt="ghandi-video" />

        <ul className="content-text-container">
          <li>
            Building and installing wind turbines or other renewable energy
          </li>
          <li>Training local technicians to operate and maintain the system</li>
          <li>
            Education communities and schools on the importance, use and care of
            renewable energies
          </li>
          <li>
            Appointing an executive board of community members to become the
            guardians of the future of the project
          </li>
          <li>
            Creating alliances with other organizations such as universities and
            local government to improve our engineering process and further our
            outreach
          </li>
        </ul>
      </Grid>

      <Grid container className="impact-container">
        <h3 className="impact-header">
          You could be a huge part of this impact!
        </h3>
        <button className="impact-button">Read About Our Impact</button>
      </Grid>
    </Grid>
  );
}
