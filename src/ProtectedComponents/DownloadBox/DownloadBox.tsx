import React from 'react'
import './styles.scss'
const DownloadBox = () => {
  return (
    <div className='download-box'>
      <span className="download-title">
        PTE speaking test  on 27th jan
      </span>
      <span className="download-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Corrupti rerum numquam praesentium aliquid impedit consequatur, non quibusdam saepe 
        quasi ullam quas incidunt maiores, porro illo sequi consectetur. Autem, repellat quia.
      </span>
      <span className="download-button">
        <button className="main-button">Download</button>
      </span>
      {/* <span className="download-icon">
        <i className="fa-solid fa-download"></i>
      </span> */}
    </div>
  )
}

export default DownloadBox