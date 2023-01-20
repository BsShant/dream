import React from "react";
import "./styles.scss";
const LandingPrice = () => {
  const pricingData = [
    {
      title: "Free",
      subTitle: "With free AI scoring",
      pricing: "$0",
      detail: [
        "  7000+ AI scored questions",
        " 1 Scored Mock Test",
        "No scored Mock Mini Tests",
        "Some Video Lessons",
        "Some Live Classes",
        "Some Templates",
      ],
      color: "#0dc3b9",
    },
    {
      title: "Premium",
      subTitle: "With free AI scoring",
      pricing: "$499",
      detail: [
        "  7000+ AI scored questions",
        " 1 Scored Mock Test",
        "No scored Mock Mini Tests",
        "Some Video Lessons",
        "Some Live Classes",
        "Some Templates",
      ],
      color: "#1366b0",
    },
    {
      title: "PTE Essential",
      subTitle: "With free AI scoring",
      pricing: "$99",
      detail: [
        "  7000+ AI scored questions",
        " 1 Scored Mock Test",
        "No scored Mock Mini Tests",
        "Some Video Lessons",
        "Some Live Classes",
        "Some Templates",
      ],
      color: "#c30d6f",
    },
  ];
  return (
    <div className="landing-price-container">
      <div className="container">
        <h2 className=" section-header landing-pricing-header">
          BEST PLAN FOR YOU
        </h2>
        <div className=" secion-subheader landing-pricing-sub-header">
          Comprehensive plans
        </div>
        <div className="pricing-boxes-container">
          {pricingData.map((pd, index) => {
            return (
              <div
                className="pricing-box"
                key={index}
                style={{ backgroundColor: pd.color }}
                data-aos={`${
                  index == 0 ? "fade-right" : index == 2 ? "fade-left" : ""
                }`}
              >
                <div className="roboto-bold pricing-header"> {pd.title}</div>
                <div className="roboto-normal pricing-sub-header">
                  {pd.subTitle}
                </div>
                <div className="roboto-bold pricing-price">
                  {pd.pricing} <span className="roboto-light">/year</span>
                </div>

                <div className="roboto-light pricing-detail">
                  {pd.detail.map((pdd, indexp) => {
                    return (
                      <div className="pricing-item" key={indexp}>
                        {/* <span className="pricing-icon">
                          <i class="fa-solid fa-hand-point-right"></i>
                        </span> */}
                        {pdd}
                      </div>
                    );
                  })}
                </div>
                <div className="pricing-button">
                  <button className="alternate-button">Start</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPrice;
