import React from "react";
import "../View/style.css";
import LoginView from "../View/LoginView";

const LoginContainer = () => {
  return (
    <div className="container">
      <div className="login-container">
        <LoginView></LoginView>
      </div>
    </div>
  );
};

export default LoginContainer;
