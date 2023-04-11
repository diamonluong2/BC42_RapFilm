import React from "react";
import { useSelector } from "react-redux";
import RowChair from "./RowChair";

function ColChair() {
  const [OrderTicket] = useSelector((state) => state.OrderTicket);
  console.log("hang", OrderTicket);
  return (
    <div>
      {OrderTicket.map((item) => {
        return (
          <div className="row">
            <div className="col-1 mt-3 text-warning">{item.hang}</div>
            <div className="col-10 ">
              <RowChair />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ColChair;
