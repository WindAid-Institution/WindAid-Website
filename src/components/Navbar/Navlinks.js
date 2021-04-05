import React from "react";
import { Link } from "gatsby";
import { NAVBAR_ROUTES } from "../../constants/routes";

const NavLinks = ({ isSidebar }) => (
  <>
    {NAVBAR_ROUTES.map(({ name, path }) => (
      <Link
        key={name}
        className={`nav-item ${isSidebar ? "nav-item--sidebar" : ""}`}
        activeClassName="nav-item-active"
        to={path}
      >
        {name}
      </Link>
    ))}
  </>
);

export default NavLinks;
