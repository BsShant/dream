import { spawn } from 'child_process'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import './styles.scss'
const HighlightIncorrectWords = () => {
    const [repeatState, setRepeatState] = useState('waiting')
    const [waitingTime, setWaitingTime] = useState<Number>(35)
    const [hearingTime, setHearingTime] = useState<Number>(35)
    const waitingInterval = useRef<any>(null)
    const hearingInterval = useRef<any>(null)
    const [selectedWord, setSelectedWord] = useState<String[]>([])

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

    const paraText = `Lorem ipsum dolor, sit consectetur adipisicing elit. Excepturi voluptatum sunt unde?
Iusto eos iure veniam laudantium quisquam rerum natus!
distinctio sit totam fugiat, a dolore architecto neque.  Lorem ipsum dolor, still
consectetur adipisicing elit. Excepturi voluptatum sunt unde?
Iusto eos iure veniam laudantium quisquam rerum natus!
distinctio sit totam fugiat, a dolore architecto neque.`.split(" ")
    const checkTimer = (e: Number) => {
        if (e >= 10) {
            return e.toString();
        } else {
            return `0${e}`;
        }
    };
    return (
        <div className='listening-fib-container'>
            <div className="listening-fib-box">
                <div className="practice-header">You will hear an audio. type the missing word in each blank</div>
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
                <div className=" fib-texts ">
                    {paraText.map((pt, index) => <span className="selectable-text practice-desc " onClick={() => {
                        if (selectedWord.includes(pt)) {
                            for (let i = 0; i < selectedWord.length; i++) {

                                if (selectedWord[i] == pt) {
                                    setSelectedWord(prev => prev.splice(i, 1))
                                }
                            }
                        }
                        else {
                            setSelectedWord(prev => [...prev, pt])
                        }
                    }} style={{
                        background: selectedWord.includes(pt) ? '#1366b0' : 'transparent',
                        color: selectedWord.includes(pt) ? '#fff' : '#000',
                        padding: selectedWord.includes(pt) ? '0px 5px' : '0'
                    }} key={index} >{pt + " "}</span>)}
                </div>
            </div>
            <div className="bottom-buttons fib-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    )
}

export default HighlightIncorrectWords