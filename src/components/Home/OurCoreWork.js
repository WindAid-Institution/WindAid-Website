import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";
import useHomepageData from "src/hooks/queries/homepage";
import { splitQueriedList } from "src/utils/utils";

import { ROUTES } from "../../constants/routes";
// import ReactPlayer from "react-player";

import "../../styles/OurCoreWork/CoreWork.css";
import Ghandi from "../../images/LandingPage/OurCoreWork/ghandi-video.svg";

const OurCoreWork = () => {
  //   const videoURL = "";

  const {
    ourCoreWork: {
      header,
      title,
      listItems: { listItems },
    },
  } = useHomepageData();

  const ourCoreWorkList = splitQueriedList(listItems);

  return (
    <Grid container className="core-container">
      <h3 className="core-header">{header}</h3>
      <Grid container className="core-content">
        {/* <ReactPlayer className="video" url={videoURL} /> */}
        <img className="video" src={Ghandi} alt="ghandi-video" />

        <ul className="content-text-container">
          {ourCoreWorkList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Grid>

      <Grid container className="impact-container">
        <h3 className="impact-header">{title}</h3>
        <Link to={ROUTES.OUT_IMPACT.path} className="impact-link">
          <button className="impact-button" type="button">
            Read About Our Impact
          </button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default OurCoreWork;
