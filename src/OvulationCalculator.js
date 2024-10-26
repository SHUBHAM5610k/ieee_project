import React, { useState } from 'react';
import './OvulationCalculator.css';
import './App.css';
function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState(28); 
  const [ovulationDate, setOvulationDate] = useState(null);

  const handleCalculate = () => {
    if (lastPeriodDate && cycleLength) {
      const periodDate = new Date(lastPeriodDate);
      const ovulationDay = new Date(
        periodDate.setDate(periodDate.getDate() + (cycleLength - 14))
      );
      setOvulationDate(ovulationDay.toLocaleDateString());
    }
  };

  return (
    <div className="calculator-container">
      <h2>Ovulation Calculator</h2>

      <label>
        Last Period Date:
        <input
          type="date"
          value={lastPeriodDate}
          onChange={(e) => setLastPeriodDate(e.target.value)}
        />
      </label>

      <label>
        Cycle Length (days):
        <input
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
          min="20" max="45"
        />
      </label>

      <button onClick={handleCalculate}>Calculate Ovulation Date</button>

      {ovulationDate && (
        <div className="result">
          <h3>Estimated Ovulation Date: {ovulationDate}</h3>
        </div>
      )}
    </div>
  );
}

export default OvulationCalculator;
