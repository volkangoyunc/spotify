import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDatalayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDatalayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlist,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}
export default App;
