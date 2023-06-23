import React, { useState } from "react";
import Button from "../Button/Button";

// This component is not being used right now.
const InputTime = ({ isTimerEnabled }) => {
  const [timePeriod, setTimePeriod] = useState(2);
  return (
    <>
      <input
        type="number"
        placeholder=" Only 2+ allowed"
        min="2"
        value={timePeriod}
        onChange={(e) => setTimePeriod(e.target.value)}
      />
      <Button
        title="Set Time Period"
        onClick={setTimePeriod}
        isDisabled={isTimerEnabled ? true : false}
      />
    </>
  );
};

export default InputTime;
