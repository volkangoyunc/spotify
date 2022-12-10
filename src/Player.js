import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ Spotify }) {
  console.log("Player", Spotify);
  return (
    <div className="Player">
      <div className="Player__body">
        <Sidebar />
        <Body Spotify={Spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
