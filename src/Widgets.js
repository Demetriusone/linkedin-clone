import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitles) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4> {heading}</h4>
        <p>{subtitles}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Demetrius one is back", "Top news - 9009 readers")}
      {newsArticle("Coronavirus", "UA updates - 9001 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto- 3001 readers")}
      {newsArticle("Is Redux too good ", "Code - 200 readers")}
    </div>
  );
};

export default Widgets;
