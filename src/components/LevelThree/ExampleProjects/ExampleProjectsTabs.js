import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import WindTurbineLogo from "images/icons/wind_turbine.svg";
import useClasses from "../../../styles/useClasses";

const styles = (theme) => ({
  tabs: {
    paddingTop: theme.spacing(3),
    "& > div >  div[role=tablist] + span": {
      display: "none",
    },
  },
  tab: {
    paddingBottom: 0,
    "& > span": {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },

  activeTab: {
    "& > span > p": {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  notActiveTab: {
    "& > span > p": {
      marginBottom: "46px",
    },
  },

  label: {
    marginBottom: theme.spacing(1),
    textTransform: "capitalize",

    "& > p": {
      fontSize: "16px",
      [theme.breakpoints.up("md")]: {
        fontSize: "22px",
      },
    },
  },

  logo: {
    width: "44px",
    height: "44px",
    marginBottom: "0 !important",
    position: "relative",
    bottom: "-1px",
  },
});

const tabLabels = [
  "Thesis Experiment",
  "Capstone Project",
  "Community Outreach",
];

const WindTurbineImage = () => {
  const classes = useClasses(styles);
  return (
    <img className={classes.logo} src={WindTurbineLogo} alt="Wind turbine" />
  );
};

const ExampleProjectsTabs = ({ currentTab, handleChange }) => {
  const classes = useClasses(styles);

  return (
    <>
      <Tabs
        className={classes.tabs}
        variant="fullWidth"
        value={currentTab}
        onChange={handleChange}
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={label}
            icon={currentTab === index && <WindTurbineImage />}
            iconPosition="bottom"
            label={
              <span className={classes.label}>
                <Typography>{label}</Typography>
              </span>
            }
            className={clsx(
              classes.tab,
              currentTab === index ? classes.activeTab : classes.notActiveTab
            )}
          />
        ))}
      </Tabs>
    </>
  );
};

ExampleProjectsTabs.propTypes = {
  currentTab: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ExampleProjectsTabs;
