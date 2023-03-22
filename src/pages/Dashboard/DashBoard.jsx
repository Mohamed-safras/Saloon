import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Appoinments from "../../components/Appoinments/Appoinments";
import Card from "../../components/cards/card";
import Statistics from "../../components/Statistics/Statistics";
import { setCurrentUser } from "../../redux-store/user/user.action";
import { currentUser } from "../../redux-store/user/user.selector";
import { DashBoardContainer } from "../Dashboard/DashBoard.styles";
const DashBoard = () => {
  const user = useSelector(currentUser);

  return (
    <DashBoardContainer>
      <Statistics />
      <Appoinments />
    </DashBoardContainer>
  );
};

export default DashBoard;
