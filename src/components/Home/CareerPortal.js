import React from "react";
import { Grid, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTheme from "@mui/material/styles/useTheme";
import { ROUTES } from "src/constants/routes";
import useHomepageData from "../../hooks/queries/homepage";
import useCIData from "../../hooks/queries/careersInternships";
import Separator from "../../shared/Separator";
import TextSection from "../../shared/TextSection";

const useStyles = makeStyles((theme) => ({
  contentContainer: () => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 800px))",
    gap: "10px",
    marginTop: "40px",
    marginBottom: "40px",
  }),
  root: {
    position: "relative",
    width: "100%",
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: "left",
    padding: "0 16px",
  },
  textContainer: () => ({
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "space-between",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    padding: "16px",
    textAlign: "left",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    zIndex: 1,
    "&:hover": {
      [theme.breakpoints.up("sm")]: {
        boxShadow: `0px 0px 30px 7px ${theme.palette.info.dark}`,
      },
    },
  }),
  subContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const CareerPortal = () => {
  const classes = useStyles();
  const theme = useTheme();

  const {
    careerPortal: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image,
    },
  } = useHomepageData();

  const { careerInternshipsContent } = useCIData();

  const data = {
    route: ROUTES.CAREERS,
    title,
    body,
    bodyTwo,
    image,
  };

  const titleStyle = {
    titleStyle: {
      textStyle: {
        fontSize: "24px",
      },
    },
  };

  const subHeaderStyle = {
    subHeaderStyle: {
      textStyle: {
        fontSize: "16px",
        marginBottom: 0,
      },
      rootStyle: {
        marginBottom: 0,
      },
    },
  };

  const bodyStyle = {
    bodyStyle: {
      textStyle: {
        marginBottom: 0,
        marginTop: 0,
        marginLeft: "5px",
      },
    },
  };

  return (
    <Separator {...data}>
      <Grid container className={classes.contentContainer}>
        <TextSection title="Current Openings" style={titleStyle} />
        <Grid item className={classes.textContainer}>
          {" "}
          {careerInternshipsContent.map(
            ({ title: ciTitle, slugId, description, positionsAvailable }) => (
              <Link
                href={`/careers-internships/#${slugId}`}
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <TextSection header={ciTitle} body={description} />
                  <Grid container className={classes.subContainer}>
                    <Grid item>
                      <TextSection
                        subHeader="Positions Available:"
                        style={subHeaderStyle}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <TextSection
                        body={positionsAvailable}
                        style={bodyStyle}
                      />
                    </Grid>
                  </Grid>
                  <TextSection
                    body={"Find out more &gt;"}
                    style={{
                      bodyStyle: {
                        textStyle: {
                          textAlign: "right",
                          color: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
            )
          )}
        </Grid>
      </Grid>
    </Separator>
  );
};

export default CareerPortal;
