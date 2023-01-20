import React from "react";
import "./styles.scss";
const FillInTheBlanks = () => {
    return (
        <div className="fill-in-the-blanks-container">
            <div className="fill-in-question-box">
                <div className="practice-header">
                    Below is a text with blanks. Click on each blank, a list of choice
                    will appear. Select the appropriate answer choice for each blank.
                </div>
                <div className="practice-desc">
                    <div className="">
                        Circumstantial evidence suggests that if the basic building
                        <select
                            name="highlight_answer[]"
                            className="multipleSelect blank_option"
                        >
                            <option value="">Select</option>
                            <option value="designs">designs</option>
                            <option value="cells">cells</option>
                            <option value="blocks">blocks</option>
                            <option value="spans">spans</option>
                        </select>
                        of life are seen scattered in space, why not life itself? In the sixties,
                        there started inter-disciplinary discussions about
                        <select
                            name="highlight_answer[]"
                            className="multipleSelect blank_option"
                        >
                            <option value="">Select</option>
                            <option value="alien">alien</option>
                            <option value="extraterrestrial">extraterrestrial</option>
                            <option value="celestial">celestial</option>
                            <option value="native">native</option>
                        </select> life.
                        The astronomers can tell what are the likely sites for life and how many
                        of them are there in our MilkyWay Galaxy of stars.Biologist shave to decide
                        what it is that
                        <select
                            name="highlight_answer[]"
                            className="multipleSelect blank_option"
                        >
                            <option value="">Select</option>
                            <option value="invokes">invokes</option>
                            <option value="imperils">imperils</option>
                            <option value="triggers">triggers</option>
                            <option value="stirs">stirs</option>
                        </select>
                        the life mechanism and where among the various astronomical sites it is
                        likely to occur.Then,the evolutionists have to say how a simple living
                        system can develop over what time
                        <select
                            name="highlight_answer[]"
                            className="multipleSelect blank_option"
                        >
                            <option value="">Select</option>
                            <option value="test">test</option>
                            <option value="span">span</option>
                            <option value="sequence">sequence</option>
                            <option value="gap">gap</option>
                        </select>
                        into a complex intelligent species. Experts in artificial intelligence,
                        communications,and information transfer are needed to resolve the problem
                        of contacting such species if they
                        <select
                            name="highlight_answer[]"
                            className="multipleSelect blank_option"
                        >
                            <option value="">Select</option>
                            <option value="desire">desire</option>
                            <option value="exist">exist</option>
                            <option value="hold">hold</option>
                            <option value="die">die</option>
                        </select>
                        . And social scientists need to assess the lifetime
                        of an advanced civilization.

                    </div>
                </div>
            </div>
            <div className="fill-in-footer">
                <button className="alternate-button">Save & Exit</button>
                <button className="main-button">Next</button>
            </div>
        </div>
    );
};

export default FillInTheBlanks;
