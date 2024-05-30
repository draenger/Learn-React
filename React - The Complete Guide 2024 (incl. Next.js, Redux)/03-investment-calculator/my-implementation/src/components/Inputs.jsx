export default function Inputs({ calculationInputs, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <div>
            <label htmlFor="investment-amount">Initial Investment</label>
            <input
              type="number"
              id="investment-amount"
              onChange={onChange}
              value={calculationInputs.initialInvestment}
            />
          </div>
          <div>
            <label htmlFor="expected-return">Expected Return</label>
            <input
              type="number"
              id="expected-return"
              onChange={onChange}
              value={calculationInputs.expectedReturn}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              type="number"
              id="annual-investment"
              onChange={onChange}
              value={calculationInputs.annualInvestment}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              type="number"
              id="duration"
              onChange={onChange}
              value={calculationInputs.duration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
