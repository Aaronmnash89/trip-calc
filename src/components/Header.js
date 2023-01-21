import React from "react";

export const Header = () => {
  const headerStyle = {
    width: "100%",
    padding: "2%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  };

  return (
    <div style={headerStyle}>
      <h1>Trip Calculator</h1>
    </div>
  );
};
