import React, { Component } from "react";
import "./Work.css";
import WebFont from "webfontloader";
import WorkData from "./WorkData.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Material UI
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

WebFont.load({
  google: {
    families: ["Ramabhadra", "sans-serif", "Red Hat Text"],
  },
});

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWork: new Object(),
      workDialogState: false,
      paragraph: [],
    };
  }
  componentDidMount = () => {
    this.setState({ selectedWork: WorkData[0] });
  };

  handleClickWork = (workObject) => {
    this.setState({ selectedWork: workObject });
    this.handleWorkDialog();
  };

  handleWorkDialog = () => {
    this.setState({ workDialogState: !this.state.workDialogState });
  };

  workParagraph = () => {
    let work = this.state.selectedWork.jobDescription;
    if (work != undefined && work.length > 0) {
      return work.map((item, index) => (
        <div key={"work-item-" + index}>{item}</div>
      ));
    }
  };

  workSkills = () => {
    let work = this.state.selectedWork.skills;
    if (work != undefined && work.length > 0) {
      return work.map((item, index) => (
        <div className="work-dialog-skill" key={"work-item-" + index}>
          {item}{" "}
        </div>
      ));
    }
  };

  render() {
    let { selectedWork, workDialogState, paragraph } = this.state;
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
                    onClick={(event) => this.handleClickWork(item)}
                  >
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="role">{item.roles}</div>
                      <div className="role">{item.date}</div>
                      {/* <div className="skills">{item.skills}</div> */}
                    </div>
                    <div className="timeline-element-arrow-left">
                      <img src="timelineArrow.png" alt="arrow" />
                    </div>
                  </div>
                );
              } else {
                content = (
                  <div
                    className="timeline-element-container"
                    onClick={(event) => this.handleClickWork(item)}
                  >
                    <div className="timeline-element-arrow-right">
                      <img src="timelineArrowLeft.png" alt="arrow" />
                    </div>
                    <div className="timeline-element-content">
                      <div className="company ">{item.companyName}</div>
                      <div className="position">{item.position}</div>
                      <div className="role">{item.roles}</div>
                      <div className="role">{item.date}</div>
                      {/* <div className="skills">{item.skills}</div> */}
                    </div>
                  </div>
                );
              }

              return (
                <VerticalTimelineElement
                  key={"workitem-" + item.id}
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

          <Dialog
            open={workDialogState}
            keepMounted
            onClose={this.handleWorkDialog}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
              style: {
                backgroundColor: "#131313",
                color: "#fff",
                border: "1px solid #D28CCF",
                minWidth: "30vw",
                padding: "2%",
              },
            }}
          >
            <DialogContent>
              <div className="work-dialog-container">
                <div className="work-dialog-title">
                  {selectedWork.companyName}
                </div>
                <div className="work-dialog-work-location">
                  <div className="work-dialog-date">
                    <div className="work-dialog-icon">
                      <CalendarMonthIcon style={{ fill: "#9a9a9a" }} />
                    </div>

                    {selectedWork.date}
                  </div>
                  <div className="work-dialog-location">
                    <div className="work-dialog-icon">
                      <LocationOnIcon style={{ fill: "#9a9a9a" }} />
                    </div>
                    {selectedWork.location}
                  </div>
                  <div className="work-dialog-skills-container">
                    {this.workSkills()}
                  </div>
                </div>
                <hr />
                <div className="work-dialog-position">
                  {selectedWork.position}
                </div>

                <div className="work-dialog-roles">
                  <span className="work-dialog-key">Key Roles: </span>
                  {selectedWork.roles}
                </div>

                <div className="work-dialog-work">{this.workParagraph()}</div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleWorkDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}
