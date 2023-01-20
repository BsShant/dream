import React from 'react'
import { useNavigate } from 'react-router-dom'
import Teacher from '../../Assets/Images/teacher.png'
import './styles.scss'
const VideoBox = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className='video-box' onClick={() => navigate('/practice/video-lessons/video-player')}>
      <img src={props.item.image} alt="" />
      {/* <div className="video-line"></div> */}
      <div className="video-play">
        <i
          className="fa-solid fa-play"
        ></i>
      </div>
    </div>
  )
}

export default VideoBox