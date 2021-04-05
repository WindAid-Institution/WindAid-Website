import React from "react";
import { Drawer, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

import DonateButton from "./DonateButton";
import NavLinks from "./Navlinks";

const useStyles = makeStyles({
  itemsContainer: {
    width: "325px",
    paddingTop: "42px",
  },
});

const Sidebar = ({ isOpen, handleSidebarClose }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleSidebarClose}>
      <AiOutlineClose
        onClick={handleSidebarClose}
        type="button"
        className="nav-close"
      />
      <Box
        className={classes.itemsContainer}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NavLinks isSidebar />
        <DonateButton isSidebar />
        <span className="nav-copyright">
          <p>&copy; WindAid Institure {new Date().getFullYear()}</p>
        </span>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
