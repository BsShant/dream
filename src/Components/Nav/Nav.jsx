import React from "react";
import "./styles.scss";
const Nav = () => {
  const navData = [
    { name: "Home", route: "home" },
    { name: "About Us", route: "about" },
    { name: "Services", route: "services" },
    { name: "Pricing", route: "pricing" },
    { name: "Blogs", route: "blogs" },
    { name: "Contact Us", route: "contact" },
  ];
  return (
    <div className="nav-container">
      {navData.map((nd, index) => {
        return (
          <a className="roboto-normal nav-item" key={index}>
            {nd.name}
          </a>
        );
      })}
    </div>
  );
};

export default Nav;
