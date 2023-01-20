import React from 'react'
import VideoBox from '../../../ProtectedComponents/VideoBox/VideoBox'
import './styles.scss'
const VideoLessons = () => {
    const imageData = [
        { image: 'https://ak3.picdn.net/shutterstock/videos/1231483/thumb/1.jpg?ip=x480' },
        { image: 'https://media.istockphoto.com/id/1173554921/video/handsome-businessman-looking-in-camera-and-talking-on-white-background.jpg?s=640x640&k=20&c=iiU1jVbbxQLz2zdlDhbBmQ1OK2SBmKRR2B-N7XBMdTU=' },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQgY9Mo1MXp6bGl_j4WFgEFucBcK-0ibD5Q&usqp=CAU" },
        { image: "https://media.istockphoto.com/id/1388139241/photo/asian-man-phone-assistant-with-welcome-gesture-on-isolated-white-background.jpg?b=1&s=170667a&w=0&k=20&c=j8dWRKoX0IrP-ndNopGvMiou3m7AndkY87ZxF4d4SvQ=" }]
    return (
        <div className='video-lessons-container'>
            <div className="video-lessons-inner">
                {/* <div className="private-section-header">Video Lessons</div> */}
                <div className="video-lesson-section">
                    <div className="video-lessons-heading">Speaking Section</div>
                    <div className="video-lessons-boxes">
                        {
                            imageData.map((vm, index) => {
                                return <VideoBox item={vm} />

                            })
                        }
                    </div>
                </div>
                <div className="video-lesson-section">
                    <div className="video-lessons-heading">Writing Section</div>
                    <div className="video-lessons-boxes">
                        {
                            imageData.map((vm, index) => {
                                return <VideoBox item={vm} />

                            })
                        }
                    </div>
                </div>

                <div className="video-lesson-section">
                    <div className="video-lessons-heading">Reading Section</div>
                    <div className="video-lessons-boxes">
                        {
                           imageData.map((vm, index) => {
                            return <VideoBox item={vm} />

                            })
                        }
                    </div>
                </div>
                <div className="video-lesson-section">
                    <div className="video-lessons-heading">Listening Section</div>
                    <div className="video-lessons-boxes">
                        {
                            imageData.map((vm, index) => {
                                return <VideoBox item={vm} />

                            })
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}

export default VideoLessons