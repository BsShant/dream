import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Audio from '../../Assets/Audio/audio.mp3'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import './styles.scss'
const SummarizeSpokenText = () => {

    const [repeatState, setRepeatState] = useState('waiting')
    const [waitingTime, setWaitingTime] = useState<Number>(35)
    const [hearingTime, setHearingTime] = useState<Number>(35)
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
        // Audio.play()
        hearingInterval.current = setInterval(async () => {
            if (count == 0) {
                // Audio.stop()
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
    const checkTimer = (e: Number) => {
        if (e >= 10) {
            return e.toString();
        } else {
            return `0${e}`;
        }
    };
    return (
        <div className='summarize-spoken-text-container'>
            <div className="summarize-spoken-text-box">
                <div className="practice-header">
                    You will hear a short lecture. Write a summary on what you have just heard from the lecturer in
                    your own words. You have 10 minutes to finish this task. Your response will be judged on the Quality of your writing
                    and on how well your response presents the key points presented in the lecture.
                </div>
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
                <div className="summarize-spoken-text-box">
                    <textarea className='practice-write-area' name="" id="" placeholder='write your answer here'></textarea>
                </div>
            </div>
            <div className="summarize-spoken-text-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    )
}

export default SummarizeSpokenText