import React from "react";
import "./styles.scss";
const MockTestBox = () => {
  return (
    <div className="mock-test-box">
      <div className="mock-text-top">
        <div className="mock-test-header">Test1</div>
      </div>
      <div className="mock-test-bottom">
        <div className="mock-test-bottom-box mock-test-result">
          <span className="bottom-icon">
            <i class="fa-solid fa-clipboard"></i>
          </span>
          <span className="bottom-text">Result</span>
        </div>
        <div className="mock-test-bottom-box mock-test-answer">
          <span className="bottom-icon">
            <i class="fa-solid fa-calendar-check"></i>
          </span>
          <span className="bottom-text">Answer</span>
        </div>
        <div className="mock-test-bottom-box mock-test-analytics">
          <span className="bottom-icon">
            <i class="fa-solid fa-chart-simple"></i>
          </span>
          <span className="bottom-text">Analytics</span>
        </div>
      </div>
      <div className="mock-test-score">
        <span className="score-title">Overall score</span>
        <span className="score-number">31/90</span>
      </div>
      <div className="mock-test-middle">
        <span className="test-middle-box test-duration">
          <span className="test-middle-title">02:23:00</span>
          <span className="test-middle-number">Duration</span>
        </span>
        <span className="test-middle-box test-questions">
          <span className="test-middle-title">57</span>
          <span className="test-middle-number">Questions</span>
        </span>
      </div>

      <div className="mock-test-status">Start</div>
    </div>
  );
};

export default MockTestBox;
