import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import "./styles.scss";
import AudioAnimation from "../../Components/AudioAnimation/AudioAnimation";
import { useRecorderPermission } from "../../Components/RecordPermission/RecordPermission";
import { invokeSaveAsDialog } from "recordrtc";

const ReadAloud = () => {
    const waitingInterval = useRef<any>(null);
    const recorder = useRecorderPermission("audio");
    const recordingInterval = useRef<any>(null);
    const [recordState, setRecordState] = useState(null);
    const [readingState, setReadingState] = useState("waiting");
    const [waitingTime, setWaitingTime] = useState<Number>(5);
    const [recordingTime, setRecordingTime] = useState<Number>(5);
    const start = () => {
        setRecordState(RecordState.START);
    };

    const stop = () => {
        setRecordState(RecordState.STOP);
    };

    //audioData contains blob and blobUrl
    const onStop = (audioData: any) => {
        console.log("audioData", audioData);
    };

    const setWaitingTimer = (e: Number) => {
        setWaitingTime(e);
    };
    const setRecordingTimer = (e: Number) => {
        setRecordingTime(e);
    };
    const startRecordingInterval = () => {
        let count = 35;
        recordingInterval.current = setInterval(async () => {
            if (count == 0) {
                setReadingState("completed");
                clearInterval(recordingInterval.current);
                // await recorder.stopRecording();
                // let blob = await recorder.getBlob();
                // invokeSaveAsDialog(blob, `random_name.webm`);
            }
            count = count - 1;
            setRecordingTimer(count);
        }, 1000);
    };
    const startWaitingInterval = () => {
        let count = 35;
        waitingInterval.current = setInterval(async () => {
            if (count == 0) {
                setReadingState("recording");
                clearInterval(waitingInterval.current);
                startRecordingInterval();
                await recorder.startRecording();
            }
            count = count - 1;
            setWaitingTimer(count);
        }, 1000);
    };
    useEffect(() => {
        if (recorder) {
            startWaitingInterval();
        }
    }, [recorder]);
    const startRecording = async () => {
        recorder.startRecording();
    };
    const stopRecording = async () => {
        await recorder.stopRecording();
        let blob = await recorder.getBlob();
        invokeSaveAsDialog(blob, `random_name.webm`);
    };
    const checkTimer = (e: Number) => {
        if (e >= 10) {
            return e.toString();
        } else {
            return `0${e}`;
        }
    };
    return (
        <div className="read-aloud-container">
            <div className="read-aloud-body">
                <div className="read-aloud-box">
                    <div className="read-aloud-heading practice-header">
                        Look at the text below. In 35 seconds, you must read this text aloud
                        as naturally and clearly as possible. You have 40 seconds to read
                        aloud.
                    </div>
                    <div className="reacrding-box audio-box">
                        {readingState == "completed" ? null : (
                            <div className="status-time">
                                00:
                                {readingState == "waiting"
                                    ? checkTimer(waitingTime)
                                    : checkTimer(recordingTime)}
                            </div>
                        )}
                        {readingState == "completed" ?
                            <div className="completed-mark">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            : (
                                <AudioAnimation
                                    color={readingState == "waiting" ? "grey" : "blue"}
                                    animationState={
                                        readingState == "waiting" ? "paused" : "running"
                                    }
                                />
                            )}{" "}
                        <div className="status-progress">
                            <div
                                className="status-progress-inner"
                                style={{
                                    width: `${((35 -
                                        Number(
                                            readingState == "completed"
                                                ? 0
                                                : readingState == "waiting"
                                                    ? waitingTime
                                                    : recordingTime
                                        )) /
                                        35) *
                                        100
                                        }%`,
                                }}
                            ></div>
                        </div>
                        <div className="status-heading">Current Status: <span className="status-text">
                            {readingState}
                        </span>
                        </div>
                    </div>
                    <div className="read-aloud-statement practice-desc">
                        Football fans are people who love football. They usually have a
                        favorite team, such as the Dallas Cowboys or the Minnesota Vikings.
                        When major football games are shown on TV, fans have a party and
                        watch the game together. They eat snacks and cheer for their
                        favorite football team. Some fans bet money on which team will win
                        the game.
                    </div>
                </div>
            </div>

            <div className="read-aloud-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    );
};

export default ReadAloud;
