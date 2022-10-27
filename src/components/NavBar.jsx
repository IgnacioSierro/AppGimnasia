import React from "react";
import "../styles/navBar.css";

const navBar = () => {
  return (
    <div className="navBar-container">
      <div className="logo">
        <img className="logo" src="/assets/logo.png" alt="Logo gimnasia" />
      </div>
      <div className="title">
        <p>Aplicación Contable</p>
      </div>
    </div>
  );
};

export default navBar;
