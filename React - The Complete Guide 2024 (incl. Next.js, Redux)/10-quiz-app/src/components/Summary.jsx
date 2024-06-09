import QuizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ).length;
  const wrongAnswers = userAnswers.filter(
    (answer, index) => answer !== null && answer !== QUESTIONS[index].answers[0]
  ).length;

  const skippedPercentage = (skippedAnswers / userAnswers.length) * 100;
  const correctPercentage = (correctAnswers / userAnswers.length) * 100;
  const wrongPercentage = (wrongAnswers / userAnswers.length) * 100;

  return (
    <div id="summary">
      <img src={QuizComplete} alt="Quiz Complete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = "user-answer";
          if (answer === null) {
            classes += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            classes += " correct";
          } else {
            classes += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={classes}>Your answer: {answer ?? "Skipped"}</p>
              <p className="user-answer correct">
                Correct answer: {QUESTIONS[index].answers[0]}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
