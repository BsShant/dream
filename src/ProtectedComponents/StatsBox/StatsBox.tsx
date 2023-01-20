import React from 'react'
import './styles.scss'
const StatsBox = (props: any) => {
    return (
        <div className="stats-box">
            <div className="stats-name">
                {props.item.name}
            </div>
            <div className="stats-values">
                <div className="stats-number">
                    {props.item.value}+
                </div>
                {/* <div className="stats-percent">
                    2
                    <span className="trend-icon">
                        <i className="fa-solid fa-caret-up"></i>
                    </span>
                </div> */}
            </div>
        </div>
    )
}

export default StatsBox