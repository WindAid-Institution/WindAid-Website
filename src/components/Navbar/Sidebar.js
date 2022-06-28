import React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { styled } from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";

import ApplyButton from "./ApplyButton";
import NavLinks from "./Navlinks";

const Sidebar = ({ isOpen, handleSidebarClose }) => {
  const theme = useTheme();

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleSidebarClose}>
      <AiOutlineCloseStyled onClick={handleSidebarClose} type="button" />
      <Box
        sx={{
          width: "325px",
          position: "relative",
          padding: "42px 0",
          height: "100%",
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NavLinks isSidebar />
        <ApplyButton isSidebar />
        <Typography
          sx={{
            position: "absolute",
            bottom: 0,
            marginBottom: theme.spacing(2),
          }}
          variant="subtitle1"
        >
          &copy; WindAid Institute {new Date().getFullYear()}
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

const AiOutlineCloseStyled = styled(AiOutlineClose)({
  position: "absolute",
  width: "24px",
  height: "24px",
  right: "16px",
  top: "16px",
  zIndex: 99,
});
