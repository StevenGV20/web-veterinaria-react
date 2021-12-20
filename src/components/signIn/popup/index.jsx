import React from "react";
import { Link } from "react-router-dom";
import "./_.css";
import { LoginIcon, LogoOutIcon } from "../../utils/icons-svg";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function MenuUserPopup({ user }) {
  return (
    <div className="user-popup-container">
      <Link to="/my-account/summary" className="user-popup-link">
        <LoginIcon className="icon-size" /> <span>Mi cuenta</span>
      </Link>
      <Link to="/administration/home" className="user-popup-link">
        <AdminPanelSettingsIcon className="icon-size" />
        <span>Administration</span>
      </Link>
      <Link to="/logout" className="user-popup-link">
        <LogoOutIcon className="icon-size ml-1" />
        <span>Cerrar Sesion</span>
      </Link>
    </div>
  );
}