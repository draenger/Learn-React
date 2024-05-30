import Header from "./components/Header";
import { useState } from "react";
import Inputs from "./components/Inputs";
import CalculationTable from "./components/CalculationTable";

function App() {
  const [calculationInputs, setCalculationInputs] = useState({
    initialInvestment: 15000,
    expectedReturn: 6,
    annualInvestment: 900,
    duration: 10,
  });

  function handleChange(event) {
    let value = event.target.value;
    setCalculationInputs((prevInputs) => {
      switch (event.target.id) {
        case "investment-amount":
          return { ...prevInputs, initialInvestment: Number(value) };
        case "expected-return":
          return { ...prevInputs, expectedReturn: Number(value) };
        case "annual-investment":
          return { ...prevInputs, annualInvestment: Number(value) };
        case "duration":
          return { ...prevInputs, duration: Number(value) };
        default:
          return prevInputs;
      }
    });
  }

  return (
    <>
      <Header />
      <Inputs calculationInputs={calculationInputs} onChange={handleChange} />
      <CalculationTable calculationInputs={calculationInputs} />
    </>
  );
}

export default App;
