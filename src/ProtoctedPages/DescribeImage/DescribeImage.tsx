import React from 'react'
import { useState } from 'react'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import './styles.scss'
import { useRecorderPermission } from '../../Components/RecordPermission/RecordPermission';
import { invokeSaveAsDialog } from "recordrtc";
import { useRef } from 'react';
import { useEffect } from 'react';

const DescribeImage = () => {


  const [describeState, setDescribeState] = useState('waiting')
  const [waitingTime, setWaitingTime] = useState<Number>(35)
  const [recordingTime, setRecordingTime] = useState<Number>(35)
  const waitingInterval = useRef<any>(null)
  const recorder = useRecorderPermission("audio");
  const recordingInterval = useRef<any>(null)

  const setWaitingTimer = (e: Number) => {
    setWaitingTime(e)
  }
  const setRecordingTimer = (e: Number) => {
    setRecordingTime(e)
  }
  const startRecording = async () => {
    recorder.startRecording();
  };
  const stopRecording = async () => {
    await recorder.stopRecording();
    let blob = await recorder.getBlob();
    invokeSaveAsDialog(blob, `random_name.webm`);
  };


  const startRecordingInterval = () => {
    let count = 35
    recordingInterval.current = setInterval(async () => {
      if (count == 0) {
        setDescribeState('completed')
        clearInterval(recordingInterval.current)
        stopRecording()
      }
      count = count - 1
      setRecordingTimer(count)
    }, 1000)
  }

  const startWaitingInterval = () => {
    let count = 35
    waitingInterval.current = setInterval(async () => {
      if (count == 0) {
        setDescribeState('recording')
        clearInterval(waitingInterval.current)
        startRecordingInterval()
        startRecording()
      }
      count = count - 1
      setWaitingTimer(count)
    }, 1000)
  }
  useEffect(() => {
    if (recorder) { startWaitingInterval() }

  }, [recorder])
  const checkTimer = (e: Number) => {
    if (e >= 10) {
      return e.toString();
    } else {
      return `0${e}`;
    }
  };

  return (
    <div className='describe-image-container'>
      <div className="describe-image-box">
        <div className="practice-header">
          Look at the give image below in 25s, speak into the microphone
          and describe the details what the image is showing.
          You will have 40 seconds to give your response.
        </div>
        <div className="describe-image-body">
          <div className="describe-image-image">
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/22/12/dinner-table.jpg?width=1200" alt="" />
          </div>

          <div className="reacrding-box audio-box">
            {describeState == "completed" ? null : (
              <div className="status-time">
                00:
                {describeState == "waiting"
                  ? checkTimer(waitingTime)
                  : checkTimer(recordingTime)}
              </div>
            )}
            {describeState == "completed" ?
              <div className="completed-mark">
                <i className="fas fa-check-circle"></i>
              </div>
              : (
                <AudioAnimation
                  color={describeState == "waiting" ? "grey" : "blue"}
                  animationState={
                    describeState == "waiting" ? "paused" : "running"
                  }
                />
              )}{" "}
            <div className="status-progress">
              <div
                className="status-progress-inner"
                style={{
                  width: `${((35 -
                    Number(
                      describeState == "completed"
                        ? 0
                        : describeState == "waiting"
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
              {describeState}
            </span>
            </div>
          </div>
        </div>
      </div>
      <div className="describe-image-footer">
        <button className="alternate-button">Save & Exit</button>
        <button className="main-button">Next</button>
      </div>
    </div>
  )
}

export default DescribeImage