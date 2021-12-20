import React from "react";
import { Link } from "react-router-dom";
import "./_.css";
import { HomeIcon, RightArrowIcon } from "../../utils/icons-svg";

export default function Breadcrumb({ links }) {
  return (
    <div className="breadcrumb-container">
      <ol className="breadcrumb-ol">
        <li className="inline-flex items-center">
          <Link to="/home" className="breadcrumb-link">
            <HomeIcon className="w-5 h-5 mr-2.5" />
            Home
          </Link>
        </li>
        {links.map((link) => (
          <li>
            <div className="breadcrumb-li">
              <RightArrowIcon className="w-6 h-6 text-gray-400" />
              {!link.actual ? (
                <Link to={link.url} className="breadcrumb-link">
                  {link.name}
                </Link>
              ) : (
                <span className="breadcrumb-link-actual">{link.name}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
