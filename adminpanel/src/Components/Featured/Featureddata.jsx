import React from "react";
import "./info.css";
import { features } from "../Data/data";

function Featureddata() {
  return (
    <>
      <div className="featured">
        {features.map((features) => {
          return (
            <>
              <div className="featuredItems">
                <span className="featuredTitle">{features.title}</span>
                <div className="featuredmoneyContaier">
                  <span className="featuredMoney">{features.money}</span>
                  <span className="featuredMoneyRate">
                    {features.rate}{" "}
                    <features.arrow className="featuredIcon negative" />
                  </span>
                </div>
                <span className="featuredSub">Copared to last Month</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Featureddata;
