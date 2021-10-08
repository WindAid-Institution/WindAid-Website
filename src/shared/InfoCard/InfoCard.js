import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ApplyButton from "../../components/ApplyButton";
import InfoCardDropDown from "./InfoCardDropDown";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundColor: theme.palette.secondary.main,
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
    marginBottom: "16px",
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "left",
    fontWeight: "bold",
    paddingBottom: "48px",
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    height: "10%",
    [theme.breakpoints.up("sm")]: {
      height: "25%",
    },
  },
}));

const InfoCard = ({
  title,
  price,
  note,
  programDates,
  included,
  notIncluded,
  image,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const noteArray = note.split(";");
  const includedArray = included.split(";");
  const notIncludedArray = notIncluded.split(";");

  const {
    description,
    file: { url },
  } = image;

  const tableCellStyle = {
    borderBottom: "none",
    padding: "8px 0",
    color: theme.palette.primary.dark,
  };

  return (
    <Grid container className={classes.contentContainer}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid container className={classes.infoContainer} spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" className={classes.text}>
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
          <Typography variant="h6" className={classes.text}>
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
      <InfoCardDropDown
        descriptionArray={includedArray}
        title={"What's included"}
      />
      <InfoCardDropDown
        descriptionArray={notIncludedArray}
        title={"What's NOT included"}
      />
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
  programDates: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
};

export default InfoCard;
