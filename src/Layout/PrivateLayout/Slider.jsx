import React, { useContext } from "react";
import "./styles.scss";
import {
  groupData,
  sliderChildren,
  sliderData,
} from "../../Assets/Data/SliderData";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutContext } from "../../Context/LayoutContext";
import { useEffect } from "react";
// import { LayoutContextType } from '../../@types/Layout';

const Slider = () => {
  const [sliderState, setSliderState] = useState(sliderData);
  const location = useLocation();
  const [pathname, setPathname] = useState("");
  const [lastName, setLastName] = useState("");

  const [openSlide, setOpenSlide] = useState("");
  const navigate = useNavigate();
  const layoutContextValue = useContext(LayoutContext);
  const { sliderCollapsed, setSliderCollapsed } = layoutContextValue;
  useEffect(() => {
    setPathname(location.pathname.split("/")[2].toString());
    if (location.pathname.split("/").length == 4) {
      setLastName(location.pathname.split("/")[3].toString());
    } else {
      setLastName("");
    }
  }, [location]);
  return (
    <div
      className={`slider-container myScrollbar ${
        sliderCollapsed ? "slider-off" : "slider-on"
      }`}
    >
      <div className="slider-body">
        {groupData.map((gd, index) => {
          return (
            <div className="group-container" key={gd.name}>
              {gd.id == "top" ? null : (
                <div className="roboto-bold group-name">{gd.name}</div>
              )}

              {sliderData
                .filter((sdf) => sdf.group == gd.id)
                .map((sd, index) => {
                  return (
                    <>
                      <div
                        key={sd.route}
                        className={`slider-item-container ${
                          openSlide == sd.route
                            ? "slider-children-on-container"
                            : ""
                        } ${pathname == sd.route ? "slider-item-active" : ""}`}
                        onClick={() => {
                          if (sd.route == openSlide) {
                            return setOpenSlide("");
                          }
                          return setOpenSlide(sd.route);
                        }}
                      >
                        <div className="slider-icon">{sd.icon}</div>
                        <div
                          className="slider-item"
                          onClick={() => {
                            if (
                              sliderChildren.filter(
                                (sc) => sc.parent == sd.route
                              ).length == 0
                            ) {
                              navigate(`/practice/${sd.route}`);
                            }
                          }}
                        >
                          {sd.name}
                        </div>
                        {sliderChildren.filter((sc) => sc.parent == sd.route)
                          .length > 0 ? (
                          <div
                            className={`slider-drop-down-icon ${
                              sd.dropdown ? "slider-children-on-icon" : ""
                            }`}
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </div>
                        ) : null}
                      </div>
                      {
                        <div
                          className={`slider-item-children-container  ${
                            sd.route == openSlide ? "slider-children-on" : ""
                          }`}
                        >
                          {sliderChildren
                            .filter((sc) => sc.parent == sd.route)
                            .map((myc, index) => {
                              let myChild = myc;

                              return (
                                <div
                                  key={myChild.route}
                                  className={`slider-item-children ${
                                    lastName === myChild.route
                                      ? "slider-item-children-on"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    navigate(
                                      `/practice/${myChild.parent}/${myChild.route}`
                                    );
                                  }}
                                >
                                  {myChild.name}
                                </div>
                              );
                            })}
                        </div>
                      }
                    </>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
