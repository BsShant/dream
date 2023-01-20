import React from 'react'
import MockTestBox from '../../ProtectedComponents/MockTestBox/MockTestBox'
import './styles.scss'
const MockTest = () => {
    return (
        <div className='mock-test-container'>
            <div className="mock-test-inner">
                {/* <div className="private-section-header">
                    Mock test

                </div> */}
                <div className="mock-test-boxes">
                    {
                        [1, 2, 3, 4, 5, 6].map((mt, index) => {
                            return <MockTestBox />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MockTest