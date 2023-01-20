import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import './styles.scss'
const HighlightCorrectSummary = () => {
    const [repeatState, setRepeatState] = useState('waiting')
    const [waitingTime, setWaitingTime] = useState<Number>(35)
    const [hearingTime, setHearingTime] = useState<Number>(35)
    const [selectedPara, setSelectedPara] = useState<Number>()
    const waitingInterval = useRef<any>(null)
    const hearingInterval = useRef<any>(null)

    const setWaitingTimer = (e: Number) => {
        setWaitingTime(e)
    }

    const setHearingTimer = (e: Number) => {
        setHearingTime(e)
    }

    const startHearingInterval = () => {
        let count = 35
        hearingInterval.current = setInterval(async () => {
            if (count == 0) {

                setRepeatState('completed')
                clearInterval(hearingInterval.current)

            }
            count = count - 1
            setHearingTimer(count)
        }, 1000)
    }
    const startWaitingInterval = () => {
        let count = 35
        waitingInterval.current = setInterval(async () => {
            if (count == 0) {
                setRepeatState('hearing')
                clearInterval(waitingInterval.current)
                startHearingInterval()
            }
            count = count - 1
            setWaitingTimer(count)
        }, 1000)
    }
    useEffect(() => {
        startWaitingInterval()

    }, [])
    const highlightData = [
        {
            id: 1,
            para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nisi molestiae, 
        adipisci quo iste optio accusantium corporis delectus id cumque impedit cupiditate debitis 
        dolorum dolore iure deleniti temporibus beatae.`
        },
        {
            id: 2,
            para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nisi molestiae, 
        adipisci quo iste optio accusantium corporis delectus id cumque impedit cupiditate debitis 
        dolorum dolore iure deleniti temporibus beatae.`
        },
        {
            id: 3,
            para: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita nisi molestiae, 
        adipisci quo iste optio accusantium corporis delectus id cumque impedit cupiditate debitis 
        dolorum dolore iure deleniti temporibus beatae.`
        }
    ]
    const checkTimer = (e: Number) => {
        if (e >= 10) {
            return e.toString();
        } else {
            return `0${e}`;
        }
    };
    return (
        <div className='hcm-container' >
            <div className="hcm-box">
                <div className="hcm-left">
                    <div className="audio-box">
                        {repeatState == "completed" ? null : (
                            <div className="status-time">
                                00:
                                {repeatState == "waiting"
                                    ? checkTimer(waitingTime)
                                    : checkTimer(hearingTime)}
                            </div>
                        )}
                        {repeatState == "completed" ?
                            <div className="completed-mark">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            : (
                                <AudioAnimation
                                    color={repeatState == "waiting" ? "grey" : "grey"}
                                    animationState={
                                        repeatState == "waiting" ? "paused" : "running"
                                    }
                                />
                            )}{" "}
                        <div className="status-progress">
                            <div
                                className="status-progress-inner"
                                style={{
                                    width: `${((35 -
                                        Number(
                                            repeatState == "completed"
                                                ? 0
                                                : repeatState == "waiting"
                                                    ? waitingTime
                                                    : hearingTime
                                        )) /
                                        35) *
                                        100
                                        }%`,
                                }}
                            ></div>
                        </div>
                        <div className="status-heading">Current Status: <span className="status-text">
                            {repeatState}
                        </span>
                        </div>
                    </div>
                </div>
                <div className="hcm-right">
                    <div className="practice-header">You will hear an audio. Click on paragraph that best relates to the recording.
                    </div>


                    <div className="hcm-selection-container">
                        {
                            highlightData.map((hdl, index) => {
                                return <div className="hdl-item"
                                    onClick={() => setSelectedPara(hdl.id)}
                                >
                                    <div className="hdl-circle">
                                        <span style={{
                                            display: "block", height: "30px",
                                            border: "1px solid #1366b0",
                                            width: "30px", borderRadius: "50%",
                                            background: hdl.id == selectedPara ? '#1366b0' : 'white',
                                            color: hdl.id == selectedPara ? '#fff' : '#000'
                                        }}></span>
                                    </div>
                                    <div className="practice-desc hdl-para" style={{ background: hdl.id == selectedPara ? '#1366b0' : 'transparent', color: hdl.id == selectedPara ? '#fff' : '#000' }}>{hdl.para}</div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
            <div className="bottom-buttons hcm-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div >
    )
}

export default HighlightCorrectSummary