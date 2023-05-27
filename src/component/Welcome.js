import React from "react";

const welcomeContainerStyle = {
  textAlign: "center",
  padding: "20px",
};

const welcomeTitleStyle = {
  fontSize: "24px",
  marginBottom: "10px",
};

const Welcome = () => {
  return (
    <div style={welcomeContainerStyle}>
      <h2 style={welcomeTitleStyle}>Welcome to Insights!</h2>
      <p>Please select a collection to view insights.</p>
    </div>
  );
};

export default Welcome;
