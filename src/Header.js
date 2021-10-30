import React, { Component } from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
      <div>
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
              <input type="text" />
            </div>
          </div>
          <div className="header__right">
            <HeaderOption title="Home" Icon={HomeIcon} />
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
            <HeaderOption title="Messaging" Icon={ChatIcon} />
            <HeaderOption title="Notification" Icon={NotificationsIcon} />
            <HeaderOption avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Canis_lupus_portrait.jpg/200px-Canis_lupus_portrait.jpg" title="me"  />
          </div>
        </div>
      </div>
  );
};

export default Header;


