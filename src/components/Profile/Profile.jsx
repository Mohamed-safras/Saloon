import React from "react";
import { Image } from "../../styles/image";
import {
  ProfileContainer,
  Role,
  UserDetails,
  UserName,
} from "./Profile.styles";

import { useSelector } from "react-redux";
import ProfilePic from "../../assets/styling-hair.jpg";
import useLogOut from "../../hooks/user.logout";
import { currentUser } from "../../redux-store/user/user.selector";
const Profile = () => {
  const user = useSelector(currentUser);

  const { LogOut } = useLogOut();
  return (
    <ProfileContainer>
      <Image height={40} width={40} borderRadius={50} onClick={LogOut}>
        <img style={{ borderRadius: "50%" }} src={ProfilePic} alt="profile" />
      </Image>
      <UserDetails>
        {user && <UserName>{user?.title}</UserName>}
        {user && <Role>{user?.role}</Role>}
      </UserDetails>
    </ProfileContainer>
  );
};

export default Profile;
