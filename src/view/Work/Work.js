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
                  <div
                    className="timeline-element-container"
                    onClick={(event) => console.log("ITEM CLICKED " + Date())}
                  >
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="role">{item.roles}</div>
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
                      <div className="role">{item.roles}</div>
                      <div className="skills">{item.skills}</div>
                    </div>
                  </div>
                );
              }

              return (
                <VerticalTimelineElement
                  className={
                    "timeline-element vertical-timeline-element--" + item.id
                  }
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
                    background: item.type == "job" ? "#D28CCF" : "#343434",
                    border: "none",
                    boxShadow: "none",
                    // color: "#fff",
                  }}
                >
                  {content}
                </VerticalTimelineElement>
              );
            })}

            <VerticalTimelineElement
              iconStyle={{
                background: "#343434",
                color: "#fff",
                boxShadow: "none",
              }}
            />
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
