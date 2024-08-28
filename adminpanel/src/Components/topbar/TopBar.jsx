import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material/";

function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIcons">
              <NotificationsNone />
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIcons">
              <Language />
              <span className="topIconBag">2</span>
            </div>
            <div className="topbarIcons">
              <Settings />
            </div>
            <img
              src="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgAAAA?rs=1&pid=ImgDetMain"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
