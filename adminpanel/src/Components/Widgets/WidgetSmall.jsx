import React from "react";
import "./widget.css";
import { Visibility } from "@mui/icons-material";
import { member } from "./MemberData";

function WidgetSmall() {
  console.log("memeber", member);
  return (
    <div className="widgetsm">
      <span className="widgetsmTitle">New Join Members</span>
      <ul className="widgetsmList">
        {member.map((data, ind) => {
          return (
            <>
              <li className="widgetsmListItem" key={ind}>
                <img src={data.img} alt="" className="widgetSmImg" />
                <div className="widgetsmUSer">
                  <span className="username">{data.username}</span>
                  <span className="jobtitle">{data.jibTitle} </span>
                </div>
                <button className="wdgetsmbutton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default WidgetSmall;
