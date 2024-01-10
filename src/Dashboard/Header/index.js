import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header-main">
      <div>
        <p>Payment How it works</p>
      </div>
      <div style={{ width: "40%" }}>
        <input
          style={{
            width: "100%",
          }}
          placeholder="Search feature tutorial etc."
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
        className="header-child"
      >
        <img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "25%",
            backgroundColor: "grey",
          }}
        />
        <img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "25%",
            backgroundColor: "grey",
          }}
        />
      </div>
    </div>
  );
};

export default Header;