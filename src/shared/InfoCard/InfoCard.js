import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { ROUTES } from "src/constants/routes";
import TextSection from "../TextSection";
import { splitQueriedList } from "../../utils/utils";

import Button from "../Button";
import InfoCardDropDown from "./InfoCardDropDown";

const InfoCard = ({
  title,
  price,
  note,
  priceImage,
  programHeading,
  programDates,
  included,
  notIncluded,
  image,
}) => {
  const theme = useTheme();
  const classes = {
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
      paddingBottom: "8px",
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
  };

  let noteArray = [];
  let includedArray = [];
  let notIncludedArray = [];

  if (note !== null) {
    [noteArray] = [note].map((data) => splitQueriedList(data));
  }

  if (typeof included !== "undefined") {
    [includedArray] = [included].map((data) => splitQueriedList(data));
  }

  if (typeof notIncluded !== "undefined") {
    [notIncludedArray] = [notIncluded].map((data) => splitQueriedList(data));
  }

  const {
    description,
    file: { url },
  } = image;

  const priceImagedescription = priceImage?.description;
  const priceImageUrl = priceImage?.file?.url;

  const tableStyle = {
    borderBottom: "none",
    color: theme.palette.primary.dark,
    padding: "0",
  };

  const tableCellStyle = {
    ...tableStyle,
    fontWeight: "normal",
  };

  const tableHeaderStyle = {
    ...tableStyle,
    fontWeight: "bold",
    paddingBottom: "8px",
    paddingRight: "30px",
  };

  const textStyle = {
    bodyStyle: {
      textStyle: {
        marginTop: "0px",
      },
    },
  };

  return (
    <Grid container sx={classes.contentContainer}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" sx={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid container sx={classes.infoContainer} spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextSection title="Price" />
          <Typography variant="h4" sx={classes.price}>
            {price}
          </Typography>
          {noteArray.length > 0 && (
            <>
              <TextSection subHeader="Note" style={textStyle} />
              <ul>
                {noteArray.map((item) => (
                  <li key={item}>
                    <TextSection body={item} style={textStyle} />
                  </li>
                ))}
              </ul>
            </>
          )}
          {priceImage !== null && <TextSection subHeader="Cost Breakdown" />}
          <Box>
            <img
              src={priceImageUrl}
              alt={priceImagedescription}
              style={{ height: "100%", width: "100%", maxWidth: "400px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextSection title={programHeading} />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableHeaderStyle}>Cohort</TableCell>
                <TableCell style={tableHeaderStyle}>Program Dates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programDates.map(({ cohort, dates }) => (
                <TableRow key={dates}>
                  <TableCell style={tableCellStyle}>
                    <TextSection body={cohort} style={textStyle} />
                  </TableCell>
                  <TableCell style={tableCellStyle}>
                    <TextSection body={dates} style={textStyle} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <div style={{ marginTop: "32px" }}>
        {includedArray.length > 0 && (
          <InfoCardDropDown
            descriptionArray={includedArray}
            title={"What's included"}
          />
        )}
        {notIncludedArray.length > 0 && (
          <InfoCardDropDown
            descriptionArray={notIncludedArray}
            title={"What's NOT included"}
          />
        )}
      </div>
      <Grid item xs={12}>
        <Button
          text="Apply"
          style={{ marginTop: "24px" }}
          route={ROUTES.APPLY}
        />
      </Grid>
      <img src={url} alt={description} style={classes.image} />
    </Grid>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string,
  price: PropTypes.string,
  programDates: PropTypes.array.isRequired,
  programHeading: PropTypes.string.isRequired,
  included: PropTypes.string,
  notIncluded: PropTypes.string,
  image: PropTypes.object.isRequired,
  priceImage: PropTypes.object,
};

InfoCard.defaultProps = {
  note: null,
  price: null,
  priceImage: null,
  included: undefined,
  notIncluded: undefined,
};

export default InfoCard;
