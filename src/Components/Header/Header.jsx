import React from "react";
import Nav from "../Nav/Nav";
import Logo from "../../Assets/Images/pte.png";
import "./styles.scss";
const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="header-logo">
              <a href="#">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-6">
            <Nav />
          </div>
          <div className="col-2 header-button">
            <button className="main-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
