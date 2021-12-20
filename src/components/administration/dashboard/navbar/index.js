import React from "react";
import { MenuIcon } from "../../../utils/icons-svg";
import "./_.css";

export default function NavBar({ openDashboard }) {
  const screenw = window.innerWidth;
  return (
    <div className="navbar-admin">
      <div className="navbar-admin-container">
        {/* {screenw < 768 && (
          
        )} */}
        <div className="menu-icon" onClick={() => openDashboard()}>
          <MenuIcon className="icon-size" />
        </div>
      </div>
    </div>
  );
}
