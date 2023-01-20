import React from "react";
import "./styles.scss";
const LandingDownload = () => {
  const downloadData = [
    {
      title: "Speaking Templates",
      point1: "Download describe image",
      point2: "Download Re-Tell image",
    },
    {
      title: "Writing Templates",
      point1: "Download describe image",
      point2: "Download Essay",
    },
    {
      title: "PTE Prediction Files",
      point1: "Our Prediction Files has the highest frequency of repeated questions",
    },
  ];
  return (
    <div className="landing-download-container">
      <div className="container">
        <h2 className="section-header landing-download-header">PTE Materials</h2>
        <div className="secion-subheader  landing-download-sub-header">
          Download Our PTE Materials
        </div>
        <div className="download-body">
          {downloadData.map((dd, index) => {
            return (
              <div className="download-box" data-aos={`${
                index == 0 ? "fade-right" : index == 2 ? "fade-left" : ""
              }`}>
                <div className="download-icon">
                  <i class="fa-solid fa-download"></i>
                </div>
                <div className="roboto-bold download-title">{dd.title}</div>
                <div className="roboto-light download-point">{dd.point1}</div>
                {dd.point2 ? (
                  <div className="roboto-light download-point">{dd.point2}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingDownload;
