import React from "react";

import "./../../scss/Question.scss";

const Question = ({ currentQuestion }) => {
  return (
    <div className="question-section">
      {currentQuestion.length === 0 ? (
        <p> Click on the button to ask Question </p>
      ) : (
        <div className="current-question">{currentQuestion}</div>
      )}
    </div>
  );
};

export default Question;
