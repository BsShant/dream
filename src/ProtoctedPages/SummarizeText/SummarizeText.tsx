import React from 'react'
import './styles.scss'
const SummarizeText = () => {
    return (
        <div className='summarize-text-container'>
            <div className="summarize-text-top"></div>
            <div className="summarize-text-question-box">
                <div className="practice-header">  Read the passage below and summarize
                    it using one sentence. Type your response in the box at the bottom of the screen.
                    You have 10 minutes to finish this task.
                    Your response will be judged on the quality of your answer. </div>
                <div className="practice-desc">
                    Many insecurities, fears, and doubts stem from a lack of understanding or
                    lack of knowledge about something. The more you understand and know about
                    a situation, the more comfortable you will be and thus the less power your
                    shyness will have over you. Let’s take for example the subject of public
                    speaking. This is an activity that terrifies most people half to death,
                    but only because most people don’t have much knowledge about it.
                    If you do some research and investigation, you’ll come to learn that
                    it’s perfectly natural to be terrified of public speaking and that almost
                    every single person has the same fears and insecurities that you do. When you
                    take it further and ask yourself why you are so terrified of this, you’ll come
                    to learn that you are scared of being judged, or of being laughed at.
                    <br /> <br />
                    From there, you can go and read and learn about people who are good at public
                    speaking—learn their tips and strategies. This way you are much more prepared
                    because your knowledge of the subject is vast. As a result of this, your confidence
                    will already be much higher than before, which might allow you to attempt public
                    speaking when you join a club like Toastmasters. As you practice more, you will
                    naturally become even more confident. This rule applies to any area where you feel
                    insecure. Read and research as much about the topic as possible. This will help
                    increase your confidence enough to give the activity a try to see if you might
                    be able to become better at it. And that initial confidence to take action is all
                    you need to get the ball rolling and overcome your shyness.

                </div>
            </div>
            <div className="summarize-text-answer-box">
                <textarea className='practice-write-area' name="" id="" cols={30} rows={10} placeholder='Type Your Answer'></textarea>
            </div>

            <div className="summarize-text-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    )
}

export default SummarizeText