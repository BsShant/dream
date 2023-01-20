import React from "react";
import "./styles.scss";
import Tutor from "../../Assets/Images/tutor.png";
const LandingTutor = () => {
  const tutorData = [
    {
      name: "Mark Hill",
      image:
        "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=",
      detail: "Lorem ipsum dolor sit amet ",
    },
    {
      name: "Mark Hill",
      image:
        "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc=",
      detail: "Lorem ipsum dolor sit amet ",
    },
    {
      name: "Mark Hill",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ27UF_J03Mjc4u3FOGdWkSRMTeJf3N4raEvgQamFDE1rNgP64YnIeLtKYwJ7bqdzgf7k&usqp=CAU",
      detail: "Lorem ipsum dolor sit amet",
    },
  ];
  const countData = [
    {
      number: 23,
      name: "Tutors",
    },
    {
      number: 12,
      name: "tests",
    },
    {
      number: 22,
      name: "users",
    },
  ];
  return (
    <div className="landing-tutor-container">
      <div className="container">
        <h2 className=" section-header landing-tutor-header">tutors</h2>
        <div className=" secion-subheader landing-tutor-sub-header">
          Our main Tutors
        </div>
        <div className="landing-tutor-body" data-aos="fade-up">
          <div className="tutor-body-left" >
            {tutorData.map((td, index) => {
              return (
                <div className="tutor-box">
                  <div className="tutor-image">
                    <img src={td.image} alt="" />
                  </div>
                  <div className="tutor-info">
                    <div className="roboto-bold tutor-name">Mark Hill</div>
                    <div className="roboto-normal tutor-detail">
                     {td.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="tutor-body-middle">
            <img src={Tutor} alt="" />
          </div>
          <div className="tutor-body-right">
            <div className="roboto-bold tutor-right-heading">
              At Your Service
            </div>
            <div className="roboto-normal tutor-right-detail">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="tutor-right-count">
              {countData.map((cd, index) => {
                return (
                  <div className="count-box">
                    <div className="roboto-bold count-number">{cd.number}</div>
                    <div className="roboto-light count-name">{cd.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTutor;
