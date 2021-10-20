import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import TextSection from "../TextSection";

const InfoCardDropDown = ({ descriptionArray, title }) => {
  const [isShowed, setIsShowed] = useState(false);

  const textStyle = {
    subHeaderStyle: {
      textStyle: {
        fontWeight: "bold",
      },
    },
    bodyStyle: {
      textStyle: {
        marginTop: "0px",
      },
    },
  };

  const subHeader = isShowed ? `- ${title}` : `+ ${title}`;

  return (
    <Grid container>
      <Grid item xs={12}>
        <div
          role="none"
          onKeyDown={() => setIsShowed(!isShowed)}
          onClick={() => setIsShowed(!isShowed)}
        >
          <TextSection subHeader={subHeader} style={textStyle} />
        </div>
      </Grid>
      <Grid item xs={12}>
        {isShowed && (
          <ul>
            {descriptionArray.map((item) => (
              <li key={item}>
                <TextSection body={item} style={textStyle} />
              </li>
            ))}
          </ul>
        )}
      </Grid>
    </Grid>
  );
};

InfoCardDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionArray: PropTypes.array.isRequired,
};

export default InfoCardDropDown;
