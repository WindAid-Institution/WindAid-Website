import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

import DonateButton from "./DonateButton";
import NavLinks from "./Navlinks";

const useStyles = makeStyles((theme) => ({
  root: {
    paper: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  itemsContainer: {
    width: "325px",
    position: "relative",
    padding: "42px 0",
    height: "100%",
  },
  navClose: {
    position: "absolute",
    width: "24px",
    height: "24px",
    right: "16px",
    top: "16px",
  },
  navCopyRight: {
    position: "absolute",
    bottom: 0,
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = ({ isOpen, handleSidebarClose }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleSidebarClose}>
      <AiOutlineClose
        onClick={handleSidebarClose}
        type="button"
        className={classes.navClose}
      />
      <Box
        className={classes.itemsContainer}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NavLinks isSidebar />
        <DonateButton isSidebar />
        <Typography className={classes.navCopyRight} variant="subtitle1">
          &copy; WindAid Institure {new Date().getFullYear()}
        </Typography>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  handleSidebarClose: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
