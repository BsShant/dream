import React from "react";
import "./styles.scss";
const LandingHero = () => {
  return (
    <div className="landing-hero-container">
      <div className="container hero-container">
        <div className="row" style={{ height: "100%" }}>
          <div className="col-lg-6 landing-hero-text-container" data-aos="fade-right">
            <h4 className="roboto-normal landing-hero-top-title">
              Advance your career
            </h4>
            <h2 className="roboto-bold landing-hero-header">
              Future in PTE Online Learning
            </h2>
            <p className="roboto-normal landing-hero-detail">
              Our PTE coaching classes combine online PTE learning, AI scoring,
              instant interaction and personal attention to help students
              prepare in the best possible way for their test.
            </p>
            <div className="landing-hero-button">
              <button className="main-button">View Courses</button>
              <button className="alternate-button">Join Now</button>
            </div>
            <div className="landing-small-eclipse"></div>
          </div>
          <div className="col-lg-6 landing-hero-image-container" data-aos="fade-left">
            <div className="landing-hero-image">
              <img
                src="https://s3-alpha-sig.figma.com/img/041d/20ab/a6f38fe7b308d1e1b76a6e185fcd9171?Expires=1670198400&Signature=bWPacUyDOqY4l1v1R19nsc99~bLjfxLcOXYeMU9BnNTmtKKKnfI0nWh-6LbU3ARKJYfgx4GX0XRIWdJjC4GuK~SxgpYKi7K5ip2Tt92RYxrUl3jSLLpjb8VFkpzf09nE0rTlJt3NPgevtKrGysLuU4pN4d5HS0AAl60IZJnTe24sk5XEJXbiHj1Xpv0eHAwe9jfJ~~Z-VcmF2bULyju~za4ezgSiiD8PunM9XvpIpXIAZRkOmBUPVjnuS6E8dRHP54lToY1J2FS44mOFuH5v84GgFEABit75nbVZX4oXqwwKGHtMQsM1vUT~9n4lJhHcunX8C7yME9I8U-5qdpS4fQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />
            </div>
            <div className="landing-big-eclipse"></div>
            <div className="landing-smallest-eclipse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
