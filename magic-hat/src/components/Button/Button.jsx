import React from "react";
import "../../scss/Button.scss";

const Button = ({ title, onClick, isDisabled, backgroundData }) => {
  return (
    <button
      style={{
        backgroundColor: `${backgroundData}`,
      }}
      className={`btn ${isDisabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
