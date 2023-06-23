import React from "react";

import Button from "../Button/Button";

import "./../../scss/MagicHatToolbar.scss";

const Buttons = ({
  timePeriod,
  isTimerEnabled,
  askRandomQuestion,
  onTimerButtonClick,
}) => {
  return (
    <div className="btn-section">
      <Button
        title="Tap for a question"
        onClick={askRandomQuestion}
        isDisabled={isTimerEnabled ? true : false}
      />
      <Button
        backgroundData={isTimerEnabled ? "red" : "green"}
        title={
          !isTimerEnabled
            ? `Ask Questions every ${timePeriod} seconds`
            : "Stop the timer"
        }
        onClick={onTimerButtonClick}
        isDisabled={false}
      />
    </div>
  );
};

export default Buttons;
