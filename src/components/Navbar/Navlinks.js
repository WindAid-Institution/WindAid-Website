import React from "react";
import PropTypes from "prop-types";

import { MENU_ROUTES } from "src/constants/routes";

import DropdownItem from "./DropdownItem";

const NavLinks = ({ isSidebar }) => (
  <>
    {MENU_ROUTES.map((item) => (
      <DropdownItem route={item} key={item.main.name} isSidebar={isSidebar} />
    ))}
  </>
);

NavLinks.propTypes = {
  isSidebar: PropTypes.bool,
};
NavLinks.defaultProps = {
  isSidebar: false,
};

export default NavLinks;
