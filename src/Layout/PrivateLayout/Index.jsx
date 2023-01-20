import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LayoutContext } from "../../Context/LayoutContext";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";
import "./styles.scss";
const PrivateLayout = (props) => {
  const { sliderCollapsed, setSliderCollapsed } = useContext(LayoutContext);
  const [childLink, setChildLink] = useState("");
  const location = useLocation();
  useEffect(() => {
    let myArr = location.pathname.split("/");
    myArr.splice(0, 1);
    setChildLink(myArr.join(" > "));
  }, [location]);
  return (
    <div className="all-priv-container">
      <Header />
      <div
        className={`private-main-body ${
          sliderCollapsed ? "main-body-full" : "main-body-off"
        }`}
      >
        <Slider />
        <div className="private-children">
          <div className="children-header">
            <div className="private-section-header">
              {location.pathname
                .split("/")
                [location.pathname.split("/").length - 1].replaceAll("-", " ")}
            </div>
            <span className="children-header-line"></span>
            <div className="private-section-link">{childLink}</div>
          </div>
          <div className="children-body">{props.children}</div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default PrivateLayout;
