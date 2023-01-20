import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'
const QuickLinks = (props: any) => {
    const navigate = useNavigate()
    return (
        <div className='quick-links' onClick={() => navigate(`/practice/${props.item.route}`)}>
            <div className="quick-link-icon">
                <i className="fa-solid fa-arrows-to-dot"></i>
            </div>
            <div className="quick-link-name">
                {props.item.name}
            </div>
        </div>
    )
}

export default QuickLinks