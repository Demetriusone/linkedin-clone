import React, { Component } from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <a href="index.html" className="header__logo">
          <img
            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png"
            alt="logo"
          />
        </a>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption avatar={true} title="me" onClick={logOutOfApp} />
      </div>
    </div>
  );
};

export default Header;
