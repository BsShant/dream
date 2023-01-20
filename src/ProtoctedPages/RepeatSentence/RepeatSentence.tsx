import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import AudioAnimation from '../../Components/AudioAnimation/AudioAnimation'
import { useRecorderPermission } from '../../Components/RecordPermission/RecordPermission'
import { invokeSaveAsDialog } from "recordrtc";

import './styles.scss'
const RepeatSentence = () => {
  const [repeatState, setRepeatState] = useState('waiting')
  const [waitingTime, setWaitingTime] = useState<Number>(35)
  const [recordingTime, setRecordingTime] = useState<Number>(35)
  const [hearingTime, setHearingTime] = useState<Number>(35)
  const waitingInterval = useRef<any>(null)
  const recorder = useRecorderPermission("audio");
  const recordingInterval = useRef<any>(null)
  const hearingInterval = useRef<any>(null)

  const setWaitingTimer = (e: Number) => {
    setWaitingTime(e)
  }
  const setRecordingTimer = (e: Number) => {
    setRecordingTime(e)
  }
  const setHearingTimer = (e: Number) => {
    setHearingTime(e)
  }
  const startRecordingInterval = () => {
    let count = 35
    recordingInterval.current = setInterval(async () => {
      if (count == 0) {

        setRepeatState('completed')
        clearInterval(recordingInterval.current)
        await recorder.stopRecording();
        let blob = await recorder.getBlob();
        invokeSaveAsDialog(blob, `random_name.webm`);
      }
      count = count - 1
      setRecordingTimer(count)
    }, 1000)
  }
  const startHearingInterval = () => {
    let count = 35
    hearingInterval.current = setInterval(async () => {
      if (count == 0) {

        setRepeatState('recording')
        clearInterval(hearingInterval.current)
        startRecordingInterval()
        await recorder.startRecording();

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
    if (recorder) { startWaitingInterval() }

  }, [recorder])
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
    <div className='repeat-sentence-container'>
      <div className="repeat-sentence-box">
        <div className="practice-header">
          You will hear a sentence. Please repeat the sentence exactly as you hear it.
          You will hear the sentence only once.

        </div>

        <div className="audio-box">
          {repeatState == "completed" ? null : (
            <div className="status-time">
              00:
              {repeatState == "waiting"
                ? checkTimer(waitingTime) :
                repeatState == 'hearing' ? checkTimer(hearingTime) : checkTimer(recordingTime)}
            </div>
          )}
          {repeatState == "completed" ?
            <div className="completed-mark">
              <i className="fas fa-check-circle"></i>
            </div>
            : (
              <AudioAnimation
                color={repeatState == "waiting" ? "grey" : repeatState == 'hearing' ? "grey" : 'blue'}
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
                        ? waitingTime :
                        repeatState == 'hearing' ?
                          hearingTime : recordingTime
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
      <div className="repeat-sentence-footer">
        <button className="alternate-button">Save & Exit</button>
        <button className="main-button">Next</button>
      </div>
    </div>
  )
}

export default RepeatSentence