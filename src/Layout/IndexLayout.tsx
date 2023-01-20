import React from 'react'
import './styles.scss'
const IndexLayout = (props: any) => {
    return (
        <div className='layout-container'>{props.children}</div>
    )
}

export default IndexLayout