import React from "react";
import { Link } from "react-router-dom";
import "./_.css";
import { LoginIcon, LogoOutIcon } from "../../utils/icons-svg";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
/* import { useSelector, useDispatch } from "react-redux";
import { changeTypeStoreSelector } from "../../../redux/globalSelector";
import { changeTypeStore } from "../../../redux/actions/globalActions";
 */
export default function MenuUserPopup(props) {
  const { changeStore } = props;
  console.log("props", props);
  /* const dispatch = useDispatch();

  console.log(props);
  const changeToAdmin = () => {
    dispatch(changeTypeStore("admin"));
  }; */
  return (
    <div className="user-popup-container">
      <Link to="/my-account/summary" className="user-popup-link">
        <LoginIcon className="icon-size" /> <span>Mi cuenta</span>
      </Link>
      <Link
        to="/"
        className="user-popup-link"
        onClick={() => changeStore("admin")}
      >
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
