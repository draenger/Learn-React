import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

export default function Question({ index, onTimeout, onAnswerSelect }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timerValue = 10000;

  if (answer.selectedAnswer) {
    timerValue = 1000;
  }

  if (answer.isCorrect !== null) {
    timerValue = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    let timer1 = setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      let timer2 = setTimeout(() => {
        onAnswerSelect(answer);

        return () => {
          clearTimeout(timer2);
        };
      }, 2000);

      return () => {
        clearTimeout(timer1);
      };
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "selected";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timerValue}
        timeout={timerValue}
        onTimeout={answer.selectedAnswer === "" ? onTimeout : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        onAnswerSelect={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
