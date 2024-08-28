import React from "react";
import "./sidebar.css";

import { sidemenu } from "../Data/data";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {sidemenu.map((menu, ind) => {
          return (
            <>
              <div className="sidebarMenu" key={ind}>
                <h3 className="sidebarTitle">{menu.title}</h3>
                <ul className="sidebarList">
                  {menu.item.map((item, index) => {
                    return (
                      <>
                        {" "}
                        <li className="sidebarListItem" key={index}>
                          <item.icon className="sidebarIcons" />
                          {item.name}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
