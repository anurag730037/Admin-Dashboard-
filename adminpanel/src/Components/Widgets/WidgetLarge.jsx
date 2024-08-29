import React from "react";
import { transaction } from "./MemberData";

function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="wdigetlgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transaction.map((data, ind) => {
          return (
            <>
              <tr className="widgetLgTr" key={ind}>
                <td className="widgetLgUSer">
                  <img src={data.img} alt="" className="widgetlgImg" />
                  <span className="widgetLgName">{data.Custname}</span>
                </td>
                <td className="widgetLgDate">{data.date}</td>
                <td className="widgetLgAmount">{data.amount}</td>
                <td className="widgetLgStatus">
                  <Button type={data.status} />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default WidgetLarge;
