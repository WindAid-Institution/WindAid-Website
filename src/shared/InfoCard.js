import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import ApplyButton from "../components/ApplyButton";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundColor: "white",
    position: "relative",
    direction: "row",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    padding: "16px",
    paddingBottom: "131px",
    [theme.breakpoints.up("sm")]: {
      padding: "32px",
      paddingBottom: "146px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "64px",
      paddingBottom: "157px",
    },
  },
  infoContainer: {
    direction: "column",
  },
  price: {
    fontWeight: "bold",
    borderBottom: "1px solid",
  },
  text: {
    color: theme.palette.primary.main,
    textAlign: "left",
  },
  image: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    height: "10%",
    [theme.breakpoints.up("sm")]: {
      height: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "40%",
    },
  },
}));

const tableCellStyle = {
  borderBottom: "none",
  padding: "7px 0",
  color: "black",
};

const InfoCard = ({
  title,
  price,
  note,
  programDates,
  included,
  notIncluded,
  image,
}) => {
  const [isIncluded, setIsIncluded] = useState(false);
  const [isNotIncluded, setIsNotIncluded] = useState(false);
  const classes = useStyles();

  const noteArray = note.split("/\n/g");
  const includedArray = included.split("/\n/g");
  const notIncludedArray = notIncluded.split("/\n/g");

  const {
    description,
    file: { url },
  } = image;

  return (
    <Grid container className={classes.contentContainer}>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.text}>
          {title}
        </Typography>
      </Grid>
      <Grid container className={classes.infoContainer} spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.text}>
            Price:
          </Typography>
          <Typography variant="h4" className={classes.price}>
            {price}
          </Typography>
          <Typography variant="h6">Note:</Typography>
          <ul>
            {noteArray.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={classes.text}>
            2021 Program Dates
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableCellStyle}>
                  <b>Cohort</b>
                </TableCell>
                <TableCell style={tableCellStyle}>
                  <b>Program Dates</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programDates.map(({ cohort, dates }) => (
                <TableRow key={dates}>
                  <TableCell style={tableCellStyle}>{cohort}</TableCell>
                  <TableCell style={tableCellStyle}>{dates}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        {isIncluded ? (
          <Typography variant="h6" onClick={() => setIsIncluded(false)}>
            &#8722; Whats included
          </Typography>
        ) : (
          <Typography variant="h6" onClick={() => setIsIncluded(true)}>
            &#43; Whats included
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isIncluded && (
          <ul>
            {includedArray.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </Grid>

      <Grid item xs={12}>
        {isNotIncluded ? (
          <Typography variant="h6" onClick={() => setIsNotIncluded(false)}>
            &#8722; Whats NOT included
          </Typography>
        ) : (
          <Typography variant="h6" onClick={() => setIsNotIncluded(true)}>
            &#43; Whats NOT included
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isNotIncluded && (
          <ul>
            {notIncludedArray.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </Grid>

      <Grid item xs={12}>
        <ApplyButton />
      </Grid>
      <img src={url} alt={description} className={classes.image} />
    </Grid>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  included: PropTypes.string.isRequired,
  notIncluded: PropTypes.string.isRequired,
  programDates: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export default InfoCard;
