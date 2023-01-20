import React from 'react'
import './styles.scss'
const MemberBox = () => {
    return (
        <div className='member-box'>
            <div className="member-image">
                <img src="https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg" alt="" />
            </div>
            <div className="member-info">
                <div className="member-name">Anjelina Jolie</div>
                <div className="member-role">Actress</div>
            </div>
            <div className="box-dot">
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}

export default MemberBox