import React from "react";
import { tableHeading } from "../data.js";
import "./style.css"

const DisplayTable = ({ data }) => {
  return (
    <div
    className="table-container"
    >
      <table
      >
        <thead
        >
          <tr
          >
            {tableHeading.map((el) => (
              <th
                className="table-head"
                key={el.id}
              >
                {el.heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
        className="table-body"
        >
          {data.map((item) => (
            <tr
            className="table-body-row"
              key={item.id}
            >
              <td
                className="text-size-global table-body-row-d"
              >
                #{item.id}
              </td>
              <td
                className="text-size-global table-body-row-d2"
              >
                {item.order_date}
              </td>
              <td
                className="text-size-global table-body-row-d2"
              >
                ₹{item.order_amount}
              </td>
              <td
                className="text-size-global table-body-row-d2"
              >
                ₹{item.trans_fee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;