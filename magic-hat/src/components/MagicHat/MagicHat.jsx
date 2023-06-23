import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
} from "react";

import Question from "../Question/Question";
import MagicHatToolbar from "../MagicHatToolbar/MagicHatToolbar";
// import InputTime from "./InputTime/InputTime";

import { getQuestions } from "../../service/MagicHatService";

import reducer from "../../StateMgmt/reducer";

import "./../../scss/MagicHat.scss";

const MagicHat = () => {
  const [isTimerEnabled, setIsTimerEnabled] = useState(false); // Timer is not enabled initially
  const [timePeriod, setTimePeriod] = useState(2); //Default is 2 seconds(Add validation code for this)
  const initialState = {
    current: "",
    unasked: [],
    asked: [],
  }; // Question state

  const [questions, dispatch] = useReducer(reducer, initialState);

  const timerId = useRef(null);

  // Reducer call for updating the question data
  const updateQuestionState = (updatedValues) => {
    dispatch({ type: "UPDATE_QUESTION", payload: updatedValues });
  };

  //Reducer call for loading the data
  const loadDataFromDB = (updatedValues) => {
    dispatch({ type: "LOAD_DATA", payload: updatedValues });
  };

  // Check if question exist in the bank
  /*
  const doesQuestionExist = (arrayData) => {
    if (arrayData !== 0) {
      return true;
    }
    return false;
  };
  /*

  // Reset the data once the questions have finished
  // update: Handled in askRandomQuestion
  /*
  const resetDataToRepeat = () => {
    const updatedQuestionData = {
      unasked: questions.asked,
      asked: [],
    };
    updateQuestionState(updatedQuestionData);
  };
  */

  // gets Random Index from array
  const getRandomIndex = (arrayData) => {
    const randomIndex = Math.floor(Math.random() * arrayData.length);
    return randomIndex;
  };

  // Update the state based on the random question that is selected.
  const askRandomQuestion = useCallback(() => {
    const questionExist = questions.unasked.length !== 0;
    // if (!questionExist) {
    //   resetDataToRepeat();
    // }
    if (!questionExist) {
      throw new Error("Question Data does not exist");
    }

    //Get random Index from the array
    const randomIndex = getRandomIndex(questions.unasked);
    const question = questions.unasked[randomIndex];

    // Update the state for the questions being asked and if it is the final question
    let updatedQuestionData = {};
    if (questions.unasked.length === 1) {
      updatedQuestionData = {
        current: question,
        unasked: [...questions.asked, question],
        asked: [],
      };
    } else {
      updatedQuestionData = {
        current: question,
        //toSpliced returns new array with randomIndex element deleted.
        unasked: [...questions.unasked.toSpliced(randomIndex, 1)],
        asked: [...questions.asked, question],
      };
    }
    updateQuestionState(updatedQuestionData);
  }, [questions.asked, questions.unasked]);

  //Fetch Questions from the DB
  // const fetchQuestions = async () => {
  //   const fetchedData = await fetch("http://localhost:5000/questions");
  //   const fetchedJson = await fetchedData.json();

  //   return fetchedJson;
  // };

  useEffect(() => {
    getQuestions()
      .then((response) => {
        const loadData = {
          unasked: response,
        };
        loadDataFromDB(loadData);
      })
      .catch((error) => console.log(error));
  }, []);
  //End of Fetch Questions from the DB

  // const timePeriod = 3; // Can be used in the UI to ask the user to set a time period

  //Interval being set and released based on the isTimerEnabled State
  useEffect(() => {
    if (isTimerEnabled) {
      timerId.current = setInterval(() => {
        askRandomQuestion();
      }, timePeriod * 1000);

      return () => {
        clearInterval(timerId.current);
      };
    } else {
      clearInterval(timerId.current);
    }
  }, [askRandomQuestion, isTimerEnabled, timePeriod]);

  // Function to toggle the timer
  const toggleTimer = () => {
    setIsTimerEnabled((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {questions.unasked.length > 0 ? (
        <>
          <div className="set-time-section">
            <label>Set Timer Here</label>
            <input
              type="number"
              min="2"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)} // Add debouncing here if needed(Custom Hook...)
              disabled={isTimerEnabled}
            />
          </div>
          <MagicHatToolbar
            timePeriod={timePeriod}
            isTimerEnabled={isTimerEnabled}
            askRandomQuestion={askRandomQuestion}
            onTimerButtonClick={toggleTimer}
          />
          <Question currentQuestion={questions.current} />
        </>
      ) : (
        <p> Please wait while the questions are being loaded...</p>
      )}
    </>
  );
};

export default MagicHat;
