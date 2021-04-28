/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu, MenuItem, Typography } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";

export const NestedMenu = ({ menuItems }) => {
  const [menuPosition, setMenuPosition] = useState(null);

  const { main, subMenu } = menuItems || {};

  const handleMenuOpen = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = () => {
    setMenuPosition(null);
  };

  const SingleMenuItem = ({ name, path }) => (
    <Link to={path}>
      <MenuItem onMouseOver={handleItemClick} onFocus={handleItemClick}>
        s{name}
      </MenuItem>
    </Link>
  );

  return (
    <Link onMouseOver={handleMenuOpen} onFocus={handleMenuOpen} to={main.path}>
      <Typography>{main.name}</Typography>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        {subMenu &&
          subMenu.map((item) =>
            item?.subSubMenu ? (
              <Link to={item.path}>
                <NestedMenuItem
                  label={item.name}
                  parentMenuOpen={!!menuPosition}
                  onMouseOver={handleItemClick}
                  onFocus={handleItemClick}
                >
                  {item.subSubMenu.map(({ name, path }) => (
                    <SingleMenuItem name={name} path={path} />
                  ))}
                </NestedMenuItem>
              </Link>
            ) : (
              <SingleMenuItem name={item.name} path={item.path} />
            )
          )}
      </Menu>
    </Link>
  );
};

export default NestedMenu;
