import React from "react";
import { data } from "./data.js";
import Header from "./Header/index.js";
import OrderCount from "./orderCount.js";
import UserTable from "./viewTable.js";
import LeftMenu from "./LeftMenu/index.js";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FAFAFA",
      }}
    >
      <LeftMenu />
      <div
        style={{
          margin: "0 12px",
          width:'100%'
        }}
      >
        <Header />

        <OrderCount />

        <UserTable data={data} />
      </div>
    </div>
  );
};

export default Dashboard;