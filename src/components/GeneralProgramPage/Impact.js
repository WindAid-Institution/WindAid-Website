import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Header from "../../shared/Header/Header";
import Title from "../../shared/Title/Title";

const sectionData = {
  header: "This impact can come in so many ways:",
  title:
    "Over the course of the program, you will have the opportunity to make a huge impact on the lives of Peruvian people by providing them with light through renewable energy",
  bodyList: [
    "By increasing community members’ quality of accommodation, by providing them with the basic need of electricity",
    "Giving the chance for children to study and families to socialise when evening comes",
    "The opportunity for communities to be in better communication with each other and other local areas, by ensuring they have access to phone charging facilities",
    "Providing a family with a sustainable, inexpensive source of energy, thereby improving their economic situation",
  ],
};

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
  },
  wrapper: {
    margin: "calc(4vw + 24px) auto",
    height: "auto",
  },
}));

const Impact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box component="section" className={`${classes.wrapper} container`}>
      <Title title={sectionData.title} className={classes.title} />
      <Header header={sectionData.header} />
      <Grid
        container
        component="ul"
        className=""
        spacing={theme.breakpoints.up("md") ? 6 : false}
      >
        {sectionData.bodyList.map((data) => (
          <Grid item component="li" md={6} sm={12}>
            {data}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Impact;
