import React from 'react'
import './styles.scss'
import MyVideo from '../../Assets/Video/videoplayback.mp4';
import { useRef } from 'react';
import { useState } from 'react';

const VideoPage = () => {
    const bigVideo = useRef<HTMLVideoElement>(null)
    const myVideo = useRef([]);
    const playButton = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const onPlay = () => {
        if (bigVideo.current) {
            if (bigVideo.current.paused) {
                bigVideo.current.play();
                setIsPlaying(true);
            } else {
                bigVideo.current.pause();
                setIsPlaying(false);
            }
        }
    };
    return (
        <div className='video-page-container'>
            <div className="video-page-inner">
                <div className="video-page-left">
                    <div className="big-player-container">
                        <div className="video-box">
                            <video
                                ref={bigVideo}
                                src={MyVideo}
                            ></video>
                            <div id="video-controls">
                                <button
                                    type="button"
                                    id="play-pause"
                                    ref={playButton}
                                    onClick={() => onPlay()}
                                    key={"big-video-pause"}
                                >
                                    <i
                                        className="fa-solid fa-pause"
                                        key={"big-video-play"}
                                        style={{
                                            display: isPlaying
                                                ? "inline-block"
                                                : "none",
                                        }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-play"
                                        style={{
                                            display: !isPlaying
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

                    </div>
                    <div className="big-video-name">
                        PTE Speaking videos for fluent speaking 100% guranteed
                    </div>
                    <div className="author-container">
                        <div className="author-image">
                            <img src="https://nationaltoday.com/wp-content/uploads/2022/10/39-Angelina-Jolie.jpg" alt="" />
                        </div>
                        <div className="author-infos">
                            <div className="author-name">Anjelina Jolie</div>
                            <div className="author-role">Actor</div>
                        </div>
                    </div>
                    <div className="video-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fugiat pariatur, doloremque,
                        labore ipsum vero temporibus dolore ad dolores dolorum iste molestias, accusamus necessitatibus
                        sed dolorem facilis mollitia consequatur. Nihil?
                    </div>
                </div>
                <div className="video-page-right myScrollbar">
                    <div className="video-page-header">
                        Releated Videos
                    </div>

                    <div className="small-videos">
                        {
                            [1, 2, 3, 4, 5, 6].map((sm, index) => {
                                return <div className="small-player">
                                    <img src="https://piktochart.com/wp-content/uploads/2017/01/Spotlight-on-video-creators-1000x800-1.jpg" alt="" />
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage