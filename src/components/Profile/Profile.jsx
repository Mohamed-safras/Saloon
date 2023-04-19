import React, { useEffect } from "react";

import {
  ProfileContainer,
  Role,
  UserDetails,
  UserName,
} from "./Profile.styles";

import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

import useLogOut from "../../hooks/user.logout";
import { currentUser } from "../../selectors/user.selector";

const Profile = () => {
  const user = useSelector(currentUser);

  const { LogOut } = useLogOut();

  return (
    <ProfileContainer>
      <Avatar src={user?.avatar} onClick={LogOut} />

      <UserDetails>
        {user && <UserName>{user?.title}</UserName>}
        {user && <Role>{user?.role}</Role>}
      </UserDetails>
    </ProfileContainer>
  );
};

export default Profile;
