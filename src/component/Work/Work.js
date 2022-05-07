import React, { Component } from "react";
import "./Work.css";
import WebFont from "webfontloader";
import WorkData from "./WorkData.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

export default class Work extends Component {
  render() {
    return (
      <div className="WorkContainer">
        <div className="WorkTextContainer">
          <div className="WorkText">WORK</div>
        </div>
        <div className="WorkTimeline">
          <VerticalTimeline lineColor="#343434">
            {WorkData.map((item, index) => {
              let content;
              if (index % 2 == 0) {
                content = (
                  <div className="timeline-element-container">
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="skills">{item.skills}</div>
                    </div>
                    <div className="timeline-element-arrow">
                      <img src="timelineArrow.png" alt="arrow" />
                    </div>
                  </div>
                );
              } else {
                content = (
                  <div className="timeline-element-container">
                    <div className="timeline-element-arrow">
                      <img src="timelineArrowLeft.png" alt="arrow" />
                    </div>
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="skills">{item.skills}</div>
                    </div>
                  </div>
                );
              }
              return (
                <VerticalTimelineElement
                  className={"vertical-timeline-element--" + item.id}
                  contentStyle={{
                    background: "transparent",
                    border: "1px solid #D28CCF",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #D28CCF",
                  }}
                  date={item.date}
                  dateClassName="dateContainer"
                  iconStyle={{
                    background: "#D28CCF",
                    border: "none",
                    boxShadow: "none",
                    // color: "#fff",
                  }}
                >
                  {/* <div className="timeline-element-container">
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="skills">{item.skills}</div>
                    </div>
                    <div className="timeline-element-arrow">
                      <img src="timelineArrow.png" alt="arrow" />
                    </div>
                  </div> */}
                  {content}
                </VerticalTimelineElement>
              );
            })}

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{
                background: "#343434",
                color: "#fff",
                boxShadow: "none",
              }}
              contentStyle={{
                background: "transparent",
                border: "1px solid #D28CCF",
                color: "#fff",
                boxShadow: "none",
              }}
              //   icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{
                background: "#343434",
                color: "#fff",
                boxShadow: "none",
              }}
              //   icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
