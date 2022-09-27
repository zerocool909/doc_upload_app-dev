import React from "react";
import "./style.css";

const LoginView = () => {
  return (
    <div className="row">
      <div className="heading-section">
        <h1>Login to your Document View account</h1>
        <span className="signup-link-section">
          Need a Rite Aid account <a href="#">Sign Up</a>
        </span>
      </div>
      <div className="col-md-6">
        <div className="login-container-left">
          <span>* indicates a required field</span>
          <div>
            <label className="heading-common">Email Address *</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label className="heading-common">Password *</label>
            <input type="password" className="form-control" />
          </div>
          <div className="button-section">
            <button className="btn btn-primary btn-login">Login</button>
          </div>
        </div>
      </div>
      <div className="col-md-6 login-left-border">
        <div className="login-container-right">
          <h2>With your Document View enjoy:</h2>
          <ul>
            <li>
              <em>
                <i class="fa fa-money" aria-hidden="true"></i>
              </em>
              <small>Earn points for shopping and prescriptions</small>
            </li>
            <li>
              <em>
                <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
              </em>
              <small>Redeem points for BonusCash</small>
            </li>
            <li>
              <em>
                <i class="fa fa-usd" aria-hidden="true"></i>
              </em>
              <small>
                Save more with exclusive digital coupons, personalized offers,
                and BonusCash promotions
              </small>
            </li>
            <li>
              <em>
                <i class="fa fa-hospital-o" aria-hidden="true"></i>
              </em>
              <small> Manage your prescriptions</small>
            </li>
            <li>
              <em>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </em>
              <small>Faster checkout</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
