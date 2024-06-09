import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  onAnswerSelect,
  answerState,
}) {
  const shuffledAnsweres = useRef();
  if (!shuffledAnsweres.current) {
    shuffledAnsweres.current = [...answers];
    shuffledAnsweres.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnsweres.current.map((answer, index) => {
        let classes = "";
        const isSelected = selectedAnswer === answer;

        if (
          (answerState === "selected" ||
            answerState === "correct" ||
            answerState === "wrong") &&
          isSelected
        ) {
          classes = answerState;
        }

        return (
          <li key={index} className="answer">
            <button onClick={() => onAnswerSelect(answer)} className={classes}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
