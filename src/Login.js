import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="Login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGİN WİTH SPOTIFY</a>
    </div>
  );
}

export default Login;
