import React from "react";
import { SideBarItem } from "./SideBarItem.styles";
const SideBarItems = ({ Icon, title, to }) => {
  return (
    <SideBarItem to={to}>
      {Icon}
      <h1>{title}</h1>
    </SideBarItem>
  );
};

export default SideBarItems;
