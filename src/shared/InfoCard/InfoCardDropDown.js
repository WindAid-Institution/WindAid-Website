import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const InfoCardDropDown = ({ descriptionArray, title }) => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <Grid container>
      <Grid item xs={12}>
        {isShowed ? (
          <Typography variant="h6" onClick={() => setIsShowed(false)}>
            &#8722; {title}
          </Typography>
        ) : (
          <Typography variant="h6" onClick={() => setIsShowed(true)}>
            &#43; {title}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {isShowed && (
          <ul>
            {descriptionArray.map((item) => (
              <li key={item}>{item}</li>
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
