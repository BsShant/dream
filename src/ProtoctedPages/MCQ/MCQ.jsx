import React from "react";
import { useState } from "react";
import "./styles.scss";
const MCQ = () => {
  const [checked, setChecked] = useState([]);

  const values = [
    {
      name: "vehicle1",
      value: "Bike",
      label: "I have a bike",
    },
    {
      name: "vehicle2",
      value: "Car",
      label: "I have a car",
    },
    {
      name: "vehicle3",
      value: "Boat",
      label: "I have a boat",
    },
  ];
  return (
    <div className="MCQ-container">
      <div className="MCQ-box">
        <div className="MCQ-left practice-desc">
          The fossil consists of a complete skull of an archaeocyte, an extinct
          group of ancestors of modern cetaceans. Although limited to a skull,
          the Pakicetus fossil provides precious details on the origins of
          cetaceans. The skull is cetacean-like but its jawbones lack the
          enlarged space that is filled with fat or oil and used for receiving
          underwater sound in modern whales. Pakicetus probably detected sound
          through the ear opening as in land mammals. The skull also lacks a
          blowhole, another cetacean adaptation for diving. Other features,
          however, show experts that Pakicetus is a transitional form between a
          group of extinct flesh-eating mammals, the mesonychids, and cetaceans.
          It has been suggested that Pakicetus fed on fish in shallow water and
          was not yet adapted for life in the open ocean. It probably bred and
          gave birth on land.
        </div>
        <div className="MCQ-right">
          <div className="practice-header">
            Read the text and answer the question by selecting all the correct
            responses. More than one response is correct.
          </div>
          <div className="MCQ-right-sub-heading">
            Pakicetus and modern cetaceans have similar
          </div>
          <div className="MCQ-check-boxes">
            <div className="choose-multiple-check-boxes">
              {values.map((vv, index) => {
                return (
                  <div
                    className="check-box-container"
                    onClick={() => {
                      if (checked.includes(vv.value)) {
                        let arr = checked;
                        for (let i = 0; i < arr.length; i++) {
                          if (arr[i] == vv.value) {
                            arr.splice(i, 1);
                          }
                        }
                        setChecked((prev) => [...arr]);
                      } else {
                        setChecked((prev) => [...prev, vv.value]);
                      }
                    }}
                  >
                    <div className="check-round">
                      {checked.includes(vv.value) && (
                        <div className="check-mark">
                          <i class="fa-solid fa-check"></i>
                        </div>
                      )}
                    </div>
                    <div className="ckeck-name">{vv.label}</div>
                  </div>
                );
              })}
            </div>
            {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label>
            <br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label>
            <br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label>
            <br /> */}
          </div>
        </div>
      </div>
      <div className="MCQ-footer">
        <button className="alternate-button">Save & Exit</button>
        <button className="main-button">Next</button>
      </div>
    </div>
  );
};

export default MCQ;
