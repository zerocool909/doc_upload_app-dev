import React from "react";
import "./style.css";
import logo from "../../images/boare_ai-logo_white.jpg";

export default function index() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="logout-container">
        <label>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </label>
      </div>
    </div>
  );
}
