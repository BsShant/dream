import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./styles.scss";
const SelectBestWord = () => {
  const elementRef = useRef(null);
  function dragOver(e) {
    e.preventDefault();
    this.classList.remove("remove-top");
  }
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
    this.classList.remove("remove-top");
  }
  function dragLeave(e) {
    e.preventDefault();
    this.classList.remove("hovered");
    this.classList.remove("remove-top");
  }
  function dragDrop(e) {
    e.preventDefault();
    this.classList.remove("hovered");
    this.append(elementRef.current);
    this.classList.add("remove-top");
  }

  function dragStart(e) {
    elementRef.current = e.target;
    this.classList.add("hold");
    setTimeout(() => {
      this.classList.add("invisible");
    }, 0);
  }
  function dragEnd(e) {
    // e.preventDefault();
    this.classList.remove("hold");
    this.classList.remove("invisible");
  }
  useEffect(() => {
    const blankBoxes = document.querySelectorAll(".blank-box");
    const bestWords = document.querySelectorAll(".best-word");

    //loop through empties
    for (const blankBox of blankBoxes) {
      blankBox.addEventListener("dragover", dragOver);
      blankBox.addEventListener("dragenter", dragEnter);
      blankBox.addEventListener("dragleave", dragLeave);
      blankBox.addEventListener("drop", dragDrop);
    }

    //loop through paras
    for (const bestWord of bestWords) {
      bestWord.addEventListener("dragstart", dragStart);
      bestWord.addEventListener("dragend", dragEnd);
    }
  }, []);
  return (
    <div className="select-best-word-container">
      <div className="select-best-word-box">
        <div className="practice-header">
          In the text below some words are missing. Drag the word from the box
          below to the appropriate place in text, to undo an answer choice drag
          the word back to the box below text.
        </div>
        <div className="select-best-word-body practice-desc">
          Human history is <div className="blank-box"></div> with instance of
          how diffusion of general purpose technologies transformed{" "}
          <div className="blank-box"></div>
          and society. Take the US where electricity{" "}
          <div className="blank-box"></div> the way factories were organized in
          the 19th century . While assemble lines transformed manufacturing. In
          communication and logistics, the telegraphed enabled{" "}
          <div className="blank-box"></div> conveyance of goods in stock and
          <div className="blank-box"> </div>to employees.
        </div>
        <div className="blank-box best-word-collection ">
          <span className="best-word" draggable={true}>
            instruction
          </span>
          <span className="best-word" draggable={true}>
            rapid
          </span>
          <span className="best-word" draggable={true}>
            commonality
          </span>
          <span className="best-word" draggable={true}>
            morose
          </span>
          <span className="best-word" draggable={true}>
            replete
          </span>
          <span className="best-word" draggable={true}>
            stagnated
          </span>
          <span className="best-word" draggable={true}>
            metamorphosed
          </span>
        </div>
      </div>

      <div className="best-word-footer">
        <button className="alternate-button">Save & Exit</button>
        <button className="main-button">Next</button>
      </div>
    </div>
  );
};

export default SelectBestWord;
