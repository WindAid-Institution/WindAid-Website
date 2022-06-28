import React from "react";
import propTypes from "prop-types";
import Button from "@mui/material/Button";
import { Link } from "gatsby";
import useTheme from "@mui/material/styles/useTheme";

const yellowColor = "#ffde15";

const ApplyButton = ({ isSidebar }) => {
  // const sxStyles = useStyles();

  const theme = useTheme();
  return (
    <Link to="/application" style={{ textDecoration: "none" }}>
      <Button
        sx={
          !isSidebar
            ? {
                backgroundColor: yellowColor,
                color: theme.palette.primary.dark,
                height: "48px",
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "none",
                minWidth: { md: "220px", lg: "260px" },
                display: { xxs: "none", lg: "inline-flex" },
                marginRight: { md: "16px", lg: 0 },
                border: `4px solid ${yellowColor}`,

                "&:hover": {
                  color: theme.palette.primary.dark,
                  borderColor: theme.palette.primary.dark,
                  backgroundColor: theme.palette.secondary.main,
                },
              }
            : {
                marginRight: 0,
                display: { md: "block" },
                margin: "32px 0",
                fontSize: "18px",
                textDecoration: "none",
              }
        }
      >
        Apply
      </Button>
    </Link>
  );
};

ApplyButton.propTypes = {
  isSidebar: propTypes.bool,
};

ApplyButton.defaultProps = {
  isSidebar: false,
};

export default ApplyButton;
