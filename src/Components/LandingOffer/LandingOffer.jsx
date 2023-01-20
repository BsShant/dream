import React from "react";
import LandingPrice from "../LandingPrice/LandingPrice";
import "./styles.scss";
const LandingOffer = () => {
  const offerData = [
    {
      icon: "",
    },
    {
      icon: (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 380 380"
        >
          <path
            d="M377.071,101.569C351.143,75.64,316.668,61.36,280,61.36c-33.428,0-65.031,11.867-90,33.608
           c-24.969-21.741-56.572-33.608-90-33.608c-36.668,0-71.143,14.28-97.071,40.208C1.054,103.444,0,105.987,0,108.639v200
           c0,4.044,2.437,7.691,6.173,9.239c3.737,1.549,8.038,0.692,10.898-2.167C39.223,293.559,68.674,281.36,100,281.36
           s60.777,12.199,82.929,34.351c0.032,0.032,0.068,0.059,0.1,0.091c0.203,0.198,0.411,0.39,0.63,0.57
           c0.125,0.103,0.257,0.193,0.386,0.289c0.133,0.099,0.262,0.202,0.4,0.294c0.149,0.099,0.303,0.186,0.455,0.277
           c0.128,0.076,0.252,0.156,0.384,0.227c0.154,0.083,0.313,0.153,0.47,0.226c0.139,0.065,0.275,0.134,0.417,0.193
           c0.153,0.063,0.31,0.115,0.466,0.17c0.152,0.054,0.302,0.113,0.458,0.16c0.158,0.048,0.318,0.083,0.477,0.123
           c0.157,0.039,0.312,0.083,0.472,0.115c0.186,0.037,0.374,0.059,0.561,0.086c0.136,0.019,0.269,0.045,0.406,0.059
           c0.658,0.065,1.32,0.065,1.978,0c0.137-0.013,0.271-0.04,0.406-0.059c0.188-0.026,0.375-0.049,0.561-0.086
           c0.16-0.032,0.315-0.076,0.472-0.115c0.159-0.04,0.319-0.075,0.477-0.123c0.156-0.047,0.306-0.106,0.458-0.16
           c0.156-0.056,0.312-0.107,0.466-0.17c0.142-0.059,0.278-0.128,0.417-0.193c0.157-0.074,0.316-0.144,0.47-0.226
           c0.131-0.07,0.256-0.151,0.384-0.227c0.153-0.091,0.307-0.177,0.455-0.277c0.138-0.092,0.267-0.195,0.4-0.294
           c0.129-0.096,0.261-0.186,0.386-0.289c0.219-0.18,0.427-0.372,0.63-0.57c0.033-0.032,0.068-0.058,0.1-0.091
           c22.151-22.151,51.603-34.351,82.929-34.351s60.777,12.199,82.929,34.351c1.913,1.913,4.471,2.929,7.073,2.929
           c1.288,0,2.588-0.25,3.825-0.762c3.736-1.548,6.173-5.194,6.173-9.239v-200C380,105.987,378.946,103.444,377.071,101.569z
            M20,287.04V112.879C41.786,92.522,70.035,81.36,100,81.36c29.967,0,58.213,11.171,80,31.531v174.154
           c-23.166-16.682-50.89-25.685-80-25.685C70.892,261.36,43.166,270.359,20,287.04z M360,287.04c-23.166-16.681-50.892-25.68-80-25.68
           c-29.11,0-56.834,9.002-80,25.685V112.891c21.787-20.36,50.033-31.531,80-31.531c29.965,0,58.214,11.162,80,31.519V287.04z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
      title: "Real exams questions",
      detail:
        "Real exams questions updated monthly, high chance to encounter in your upcoming exams.",
    },
    {
      icon: <i class="fa-solid fa-gear"></i>,
      title: "User-friendly interface ",
      detail: `Smart and user-friendly interface, smooth and frictionless operation system guaranteed.`,
    },
    {
      icon: <i class="fa-solid fa-chart-simple"></i>,
      title: "AI Scoring",
      detail: `AI scoring engine gives results such as content, form, grammar, spelling, vocabulary range, general linguistic range, and development structure and coherence`,
    },
  ];

  return (
    <div className="landing-offer-container">
      <div className="container">
        {/* <h2 className="roboto-bold landing-offer-header">What We Offer You</h2>
        <div className="roboto-light landing-offer-sub-header">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, vel.
        </div> */}

        <div className="landing-offer-body">
          {offerData.map((od, index) => {
            return index == 0 ? (
              <div className="offer-one offer-header">
                <div className="roboto-bold offer-title">What We Offer You</div>
                <div className="roboto-light offer-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </div>
              </div>
            ) : (
              <div className="offer-one offer-data-box" key={index}>
                <div className="offer-data-icon">{od.icon}</div>
                <div className="roboto-normal offer-data-title">{od.title}</div>
                <div className="roboto-light offer-data-detail">
                  {od.detail}
                </div>
              </div>
            );
          })}
        </div>

        <LandingPrice />
      </div>
    </div>
  );
};

export default LandingOffer;
