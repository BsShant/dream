import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import './styles.scss'
const ListeningMultipleAnswers = () => {
    const [checked, setChecked] = useState<String[]>([]);
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

    const checkTimer = (e: Number) => {
        if (e >= 10) {
            return e.toString();
        } else {
            return `0${e}`;
        }
    };

    const values = [
        {
            name: "vehicle1",
            value: "Bike",
            label: "I have a bike",
        },
        {
            name: "vehicle2",
            value: "Car",
            label: "I have a car",
        },
        {
            name: "vehicle3",
            value: "Boat",
            label: "I have a boat",
        },
    ];
    return (
        <div className='listening-multiple-answers-container' >
            <div className="listening-multiple-answers-box">
                <div className="lma-left">
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
                <div className="lma-right">
                    <div className="practice-header">Listen to the recording and answer the question by selecting al the correct responses.
                        You will need to select more than one response.
                    </div>
                    <div className="lma-question">
                        Which of these countries still use woodblock printing on fabrics?
                    </div>

                    <div className="lma-selection-container">
                        <div className="choose-multiple-check-boxes">
                            {values.map((vv, index) => {
                                return (
                                    <div
                                        className="check-box-container"
                                        onClick={() => {
                                            if (checked.includes(vv.value)) {
                                                let arr = checked;
                                                for (let i = 0; i < arr.length; i++) {
                                                    if (arr[i] == vv.value) {
                                                        arr.splice(i, 1);
                                                    }
                                                }
                                                setChecked((prev) => [...arr]);
                                            } else {
                                                setChecked((prev) => [...prev, vv.value]);
                                            }
                                        }}
                                    >
                                        <div className="check-round">
                                            {checked.includes(vv.value) && (
                                                <div className="check-mark">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ckeck-name">{vv.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label htmlFor={"vehicle1"}> I have a bike</label>
                        <br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label htmlFor={"vehicle2"}> I have a car</label>
                        <br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label htmlFor={"vehicle3"}> I have a boat</label>
                        <br /> */}
                    </div>
                </div>
            </div>
            <div className="bottom-buttons lsm-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    )
}

export default ListeningMultipleAnswers