import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  let resultsData = calculateInvestmentResults(userInput);

  if (userInput.duration <= 0) {
    return <p className="center">Please enter a duration greater than 0.</p>;
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Initial Investment</th>
          <th>Interest (year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          let investedCapital =
            yearData.annualInvestment * yearData.year +
            userInput.initialInvestment;
          let totalInterest = yearData.valueEndOfYear - investedCapital;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
