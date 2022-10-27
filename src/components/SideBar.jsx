import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { FaPlusSquare, FaListAlt, FaMoneyCheckAlt } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="ul-sidebar">
        <Link className="link" to="#">
          <li className="icon">
            <FaPlusSquare color="hsla(0, 0%, 20%, 1)" />
            <span className="separator">Agregar socio</span>
          </li>
        </Link>
        <Link className="link" to="#">
          <li className="icon">
            <FaPlusSquare color="hsla(0, 0%, 20%, 1)" />
            <span className="separator">Agregar sponsor</span>
          </li>
        </Link>
        <Link className="link" to="/partners">
          <li className="icon">
            <FaListAlt color="hsla(0, 0%, 20%, 1)" />
            <span className="separator">Lista socios</span>
          </li>
        </Link>
        <Link className="link" to="#">
          <li className="icon">
            <FaListAlt color="hsla(0, 0%, 20%, 1)" />
            <span className="separator">Lista sponsors</span>
          </li>
        </Link>
        <Link className="link" to="#">
          <li className="icon">
            <FaMoneyCheckAlt color="hsla(0, 0%, 20%, 1)" />
            <span className="separator">Recaudación</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
