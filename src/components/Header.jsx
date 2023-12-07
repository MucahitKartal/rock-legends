import React from "react";
import rockLogo from "../assets/rock-logo.jpg";

const Header = () => {
  return (
    <div>
      <img
        className="rock-logo"
        src={rockLogo}
        alt="logo"
        width="100%"
        height="200px"
      />
      <h1 className="alt-rock-title">ALTERNATIVE ROCK LEGENDS 🎸</h1>
    </div>
  );
};

export default Header;
