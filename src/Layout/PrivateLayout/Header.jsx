import React from "react";
import { useContext } from "react";
import { LayoutContext } from "../../Context/LayoutContext";
import "./styles.scss";
import Logo from "../../Assets/Images/pte.png";

const Header = () => {
  const { sliderCollapsed, setSliderCollapsed } = useContext(LayoutContext);
  return (
    <div className="private-layout-header-container">
      <div className="private-header-left">
        <div className="slider-logo">
          <img src={Logo} alt="" />
        </div>
        {/* <span
          className="slider-hamburger-icon"
          onClick={() => setSliderCollapsed((prev) => !prev)}
        >
          <i className="fa-solid fa-bars"></i>
        </span> */}
        <div className="header-search-box">
          <input type="text" placeholder="Search" />
          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
      <div className="private-header-right">
        <div className="header-icon">
          <i className="fa-solid fa-comment-dots"></i>
        </div>
        <div className="header-icon">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="header-image">
          <img
            src="https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
