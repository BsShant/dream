import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.scss";
const ReorderParagraph = () => {
  const [draggedElement, setDraggedElement] = useState(null);
  const elementRef = useRef(null);
  function dragOver(e) {
    e.preventDefault();
  }
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }
  function dragLeave(e) {
    e.preventDefault();
    this.classList.remove("hovered");
  }
  function dragDrop(e) {
    e.preventDefault();
    this.classList.remove("hovered");
    this.append(elementRef.current);
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
    const paras = document.querySelectorAll(".disrupted-para");
    const empties = document.querySelectorAll(".empty-box");

    //loop through empties
    for (const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
    }

    //loop through paras
    for (const para of paras) {
      para.addEventListener("dragstart", dragStart);
      para.addEventListener("dragend", dragEnd);
    }
  }, []);
  return (
    <div className="reorder-paragraph-container">
      <div className="reorder-box">
        <div className="practice-header">
          The text boxes in the left panel have been placed in random order,
          Restore the original order by dragging the text boxes from left to the
          right panel
        </div>
        <div className="re-order-body">
          <div className="re-order-left">
            <div className="re-order-sub-heading">Source</div>
            <div className="disrupted-boxes empty-box">
              <p className="disrupted-para para-1" draggable={true}>
                This is disrupted para1
              </p>
              <p className="disrupted-para para-2" draggable={true}>
                This is disrupted para2
              </p>
              <p className="disrupted-para para-3" draggable={true}>
                This is disrupted para3
              </p>
              <p className="disrupted-para para-4" draggable={true}>
                This is disrupted para4
              </p>
            </div>
          </div>
          <div className="re-order-right">
            <div className="re-order-sub-heading">Target</div>
            <div className="managed-boxes empty-box">
              <div className="drop-text">Drop your paragraph here</div>
            </div>
          </div>
        </div>
      </div>

      <div className="reorder-footer">
        <button className="alternate-button">Save & Exit</button>
        <button className="main-button">Next</button>
      </div>
    </div>
  );
};

export default ReorderParagraph;
