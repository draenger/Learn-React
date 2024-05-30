import { calculateInvestmentResults, formatter } from "../util/investment";
import Table from "./Table";

export default function CalculationTable({ calculationInputs }) {
  let calculationTable = calculateInvestmentResults(calculationInputs);

  if (calculationTable.length === 0) {
    return null;
  }

  return (
    <Table
      id="result"
      tableHeaders={
        <tr>
          <th>Year</th>
          <th>Initial Investment</th>
          <th>Interest (year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      }
      tableBody={calculationTable.map((yearData) => {
        let investedCapital =
          yearData.annualInvestment * yearData.year +
          calculationInputs.initialInvestment;
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
    />
  );
}
