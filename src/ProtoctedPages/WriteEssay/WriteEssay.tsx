import React from 'react'
import './styles.scss'
const WriteEssay = () => {
    return (
        <div className='essay-text-container'>
            <div className="essay-text-top"></div>
            <div className="essay-text-question-box">
                <div className="practice-header">
                    You will have 20 minutes to plan, write and revise an essay about the topic given below.
                    Your response will be judged on how well
                    you develop a position, organize your ideas, present supporting details, and
                    control the elements of standard written English. You should write 200-300 words.
                </div>
                <div className="practice-desc">
                    With the increase of digital media available online, the role of the library has become
                    obsolete. Universities should only procure digital materials rather than textbooks.
                    Discuss both the advantages and disadvantages of this position and give your own
                    point of view
                </div>
            </div>
            <div className="essay-text-answer-box">
                <textarea  className='practice-write-area' name="" id="" cols={30} rows={10} placeholder='Type Your Answer'></textarea>
            </div>

            <div className="essay-text-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    )
}

export default WriteEssay