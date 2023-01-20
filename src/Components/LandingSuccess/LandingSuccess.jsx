import React from "react";
import "./styles.scss";
import YouTube from "react-youtube";
const LandingSuccess = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = () => {};
  return (
    <div className="landing-success-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 success-left">
            <YouTube
              style={{ width: "100%" }}
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={onReady}
            />
          </div>
          <div className="col-lg-6 success-right">
            <div className="success-right-heading">Our Students</div>
            <div className="success-right-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div className="sucess-right-author-box">
              <div className="author-image"></div>
              <div className="author-info">
                <div className="author-name"></div>
                <div className="author-role"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSuccess;
