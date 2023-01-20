import React from "react";
import "./styles.scss";
const LandingAbout = () => {
  return (
    <div className="landing-about-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <h2 className="roboto-bold landing-about-header">About Us</h2>
            <p className="roboto-light landing-about-detail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
        <div className="landing-about-button">
          <button className="alternate-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
