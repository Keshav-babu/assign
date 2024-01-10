import React from "react";
import { onlineOrder } from "./data.js";

const OrderCount = () => {
  return (
    <div>
      <p>Transgactions | This month</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Overview</p>
        <p>Last Month</p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {onlineOrder.map((el) => (
          <div
          key={el.id}
            style={{
              padding: "20px",
              backgroundColor: "#FFF",
              flex: "1",
              boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
            }}
          >
            <p>{el.name}</p>
            <h4>{`${el.name !== "Online Orders" ? "₹" : ""}${el.value}`}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCount;