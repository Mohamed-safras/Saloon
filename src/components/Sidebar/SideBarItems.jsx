import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SideBarItem } from "./SideBarItem.styles";
const SideBarItems = ({ Icon, title, to }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.currentPage);

  const setCurrentpage = () => {
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: to === "/" ? "dashboard" : to,
    });
  };

  return (
    <SideBarItem
      active={currentPage}
      title={title.toLowerCase()}
      to={to}
      onClick={setCurrentpage}
    >
      {Icon}
      <h1>{title}</h1>
    </SideBarItem>
  );
};

export default SideBarItems;
