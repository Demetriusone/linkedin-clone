import React from "react";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://bureau.ru/var/files/img1532613761" alt="" />
        <Avatar className="sidebar__avatar" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2> {user.displayName}</h2>
        <h4> {user.email} </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> Who viewed you</p>
          <p className="sidebar__statNumber">2.448</p>
        </div>
        <div className="sidebar__stat">
          <p> Views on post</p>
          <p className="sidebar__statNumber">2.234</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p> Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("deisgn")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
