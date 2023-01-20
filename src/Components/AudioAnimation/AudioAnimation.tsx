import React from 'react'
import './styles.scss'
const AudioAnimation = (props: any) => {
    return (
        <div className='bars-outer'>
            <div id='bars'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 4, 5, 6, , 7, 8, 9].map((sa) => {
                    return <div className='bar' style={{ background: props.color, animationPlayState: props.animationState }}></div>

                })
                }
            </div>
        </div>
    )
}

export default AudioAnimation