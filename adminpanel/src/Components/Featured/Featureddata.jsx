import React from "react";
import "./info.css";
import { features } from "../Data/data";

function Featureddata() {
  return (
    <>
      {features.map((features) => {
        return (
          <>
            <div className="featured">
              <div className="featuredItems">
                <span className="featuredTitle">{features.title}</span>
                <div className="featuredmoneyContaier">
                  <span className="featuredMoney">{features.money}</span>
                  <span className="featuredMoneyRate">
                    {features.rate} <features.arrow />
                  </span>
                </div>
                <span className="featuredSub">Copared to last Month</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Featureddata;
