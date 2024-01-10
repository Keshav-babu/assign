import React from "react";
import UserProfile from "../userProfile";
import "./style.css"
import { leftMenuTab } from "../data";

const LeftMenu = () => {
  return (
    <>
      <div
        className="left-menu-container"
      >
        <UserProfile />
        {leftMenuTab.map((el) => (
          <div
          className="menu-content"
            key={el.id}
          >
            <img style={{ width: "20px", height: "20px" }} />

            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftMenu;