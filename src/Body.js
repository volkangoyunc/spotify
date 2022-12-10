import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDatalayerValue } from "./DataLayer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, user }, dispatch] = useDatalayerValue();
  return (
    <div className="Body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={user?.images[0]?.url} />
        <div className="body__infoText">
          <strong>Playlıst</strong>
          <h2>Discovery Weekly</h2>
        </div>
      </div>
      <p>{discover_weekly?.description}</p>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
