import React from "react";
import "./styles.scss";
import Logo from "../../Assets/Images/whiteLogo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-footer">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6 upper-footer-info">
              <div className="roboto-bold upper-footer-heading">
                Keep in touch with the trends
              </div>
              <div className="roboto-normal upper-footer-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
            <div className="col-lg-6 upper-footer-form">
              <div className="upper-footer-input-form">
                <input type="text" placeholder="Enter your email" />
                <div className="roboto-normal upper-footer-input-button">
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-about">
                <div className="footer-image">
                  <img src={Logo} alt="" />
                </div>
                <div className="roboto-normal footer-about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="footer-links">
                  <a href="https://facebook.com">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://youtube.com">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://linkedin.com">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
              <div className="roboto-bold footer-header">Useful Links</div>
              <div className="roboto-normal footer-body">
                <a href="#" className="footer-item">
                  Home
                </a>
                <a href="#" className="footer-item">
                  About Us
                </a>
                <a href="#" className="footer-item">
                  Services
                </a>
                <a href="#" className="footer-item">
                  Pricing
                </a>
                <a href="#" className="footer-item">
                  Blogs
                </a>
                <a href="#" className="footer-item">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-3">
              <div className="roboto-bold footer-header">Contact Details</div>
              <div className="footer-body">
                <div className="footer-item">
                  <span className="footer-contact-icon">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  info@dreampte.com
                </div>
                <div className="footer-item">
                  <span className="footer-contact-icon">
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  +9779841255921
                </div>
                <div className="footer-item">
                  <span className="footer-contact-icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  Dream Pte, Aus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="roboto-normal footer-bottom">
        © Copyright DreamPTE 2021
      </div>
    </div>
  );
};

export default Footer;
