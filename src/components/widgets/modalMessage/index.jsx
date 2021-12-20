import React from "react";
import "./_.css";
import { Close } from "@mui/icons-material";

export default function ModalMessage({ onClose, title }) {
  return (
    <>
      <div className="block">
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-header">
            <h1>{title}</h1>
          </div>
          <div className="modal-body">
            <div className="modal-buttons-container">
              <button className="btn btn-indigo" onClick={onClose}>
                Aceptar
              </button>
              <button className="btn btn-red" onClick={onClose}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
