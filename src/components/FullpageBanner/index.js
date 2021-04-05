import React from "react";

import Grid from "@material-ui/core/Grid";
import bannerImg from "../../images/banner_hq.jpg";
import "../../styles/banner.css";

// const useStyles = makeStyles((theme) => ({
//     bannerContainer:{
//         height: "100%",
//         width: "100%"
//     },
//   bannerPic: {
//     height: "100%",
//     width: "100%",
//     objectFit: "cover"
//   },
// }));

export default function FullpageBanner() {
  // const styles = useStyles();
  return (
    <Grid container className="banner-container">
      <Grid item className="banner-container">
        <img src={bannerImg} className="banner-pic" alt="banner" />
        <div className="banner-text">
          Working with peruvian communities to nurture an energy independent
          future.
        </div>
      </Grid>
    </Grid>
  );
}
