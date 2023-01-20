import React, { useState } from "react";
import faqData, { faqTitle } from "../../Assets/Data/FaqData";
import "./styles.scss";
const LandingFaq = () => {
  const [shown, setShown] = useState(false);
  const [showId, setShowId] = useState(null);
  const [faqState, setFaqState] = useState(faqTitle);
  const [faqDataState, setFaqDataState] = useState(faqData);
  const boxPress = (item) => {
    setFaqDataState((prev) => {
      let pr = prev;
      let newAr = pr.map((p, ind) => {
        if (p.id === item.id) {
          return {
            ...p,
            dropdown: !p.dropdown,
          };
        }
        return { ...p, dropdown: false };
      });
      return [...newAr];
    });
  };

  return (
    <div className="landing-faq-container">
      <div className="container">
        <h2 className="section-header landing-faq-header">PTE Faqa</h2>
        <div className="secion-subheader  landing-faq-sub-header">
          Our Most Asked Questions
        </div>
        <div className="landing-faq-body">
          {faqState.map((fd, index) => {
            return (
              <div className={`faq-box ${fd.dropdown ? "shown-box" : ""}`}>
                <div className="roboto-bold faq-heading">{fd.title}</div>

                {faqDataState
                  .filter((fq) => fq.parent == fd.id)
                  .map((fdl, index2) => {
                    return (
                      <div
                        className={`faq-list ${
                          fd.dropdown ? "faq-list-on" : ""
                        }`}
                      >
                        <div
                          className={`roboto-bold faq-banner ${
                            fdl.dropdown ? "show-banner" : ""
                          }`}
                          onClick={() => boxPress(fdl)}
                        >
                          {fdl.title}
                          <span className="banner-icon">+</span>
                        </div>
                        <div
                          className={`roboto-normal faq-detail ${
                            fdl.dropdown ? "show-detail" : ""
                          }`}
                        >
                          <div className="detail-inner">{fdl.detail}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingFaq;
