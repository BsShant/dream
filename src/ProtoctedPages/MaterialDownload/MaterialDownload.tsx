import React from 'react'
import DownloadBox from '../../ProtectedComponents/DownloadBox/DownloadBox'
import './styles.scss'
const MaterialDownload = () => {
  return (
    <div className='material-download-container'>
        <div className="material-download-inner">
            {/* <div className="private-section-header">
                Material Download
            </div> */}
            <div className="material-download-section">
                    <div className="material-download-heading">Study Material</div>
                    <div className="material-download-boxes">
                        {
                            [1, 2, 3, 4].map((vm, index) => {
                                return <DownloadBox />

                            })
                        }
                    </div>
                </div>
        </div>
    </div>
  )
}

export default MaterialDownload