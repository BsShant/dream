import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import PteVideo from "../../Assets/Video/videoplayback.mp4";
const LandingVideo = () => {
  const myVideo = useRef([]);
  const playButton = useRef(null);
  const muteButton = useRef(null);
  const fullScreenButton = useRef(null);
  const seekBar = useRef(null);
  const volumeBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState([
    { playing: false, index: 0 },
    { playing: true, index: 1 },
    { playing: false, index: 2 },
  ]);

  const videoData = [
    {
      video: PteVideo,
    },
    {
      video: PteVideo,
    },
    {
      video: PteVideo,
    },
  ];
  useEffect(() => {
    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");
  }, []);
  const onPlay = (index) => {
    if (myVideo.current[index].paused) {
      myVideo.current[index].play();
      setIsPlaying((prev) => {
        return prev.map((pp) => {
          if (pp.index == index) {
            return { ...pp, playing: true };
          }
          return { ...pp };
        });
      });
    } else {
      myVideo.current[index].pause();
      setIsPlaying((prev) => {
        return prev.map((pp) => {
          if (pp.index == index) {
            return { ...pp, playing: false };
          }
          return { ...pp };
        });
      });
    }
  };
  return (
    <div className="landing-video-container">
      <div className="container">
        <h2 className=" section-header landing-video-header">
          OUR STUDENT VOICES
        </h2>
        <div className=" secion-subheader landing-video-sub-header">
          Hear from our students
        </div>
        <div className="video-body">
          {isPlaying &&
            videoData.map((vd, index) => {
              return (
                <div
                  className="video-box"
                  data-aos={`${
                    index == 0 ? "fade-right" : index == 2 ? "fade-left" : ""
                  }`}
                >
                  <video
                    ref={(el) => (myVideo.current[index] = el)}
                    src={vd.video}
                  ></video>
                  <div id="video-controls">
                    <button
                      type="button"
                      id="play-pause"
                      ref={playButton}
                      onClick={() => onPlay(index)}
                      key={"pause" + index}
                    >
                      <i
                        class="fa-solid fa-pause"
                        key={"play" + index}
                        style={{
                          display: isPlaying[index].playing
                            ? "inline-block"
                            : "none",
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-play"
                        style={{
                          display: !isPlaying[index].playing
                            ? "inline-block"
                            : "none",
                        }}
                      ></i>
                    </button>
                    {/* <input type="range" id="seek-bar" value="0" ref={seekBar} />
                  <button type="button" id="mute" ref={muteButton}>
                    Mute
                  </button>
                  <input
                    ref={volumeBar}
                    type="range"
                    id="volume-bar"
                    min="0"
                    max="1"
                    step="0.1"
                    value="1"
                  />
                  <button type="button" id="full-screen" ref={fullScreenButton}>
                    Full-Screen
                  </button> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LandingVideo;
