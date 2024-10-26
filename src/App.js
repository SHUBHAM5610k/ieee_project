import React from 'react';
import OvulationCalculator from './OvulationCalculator';
import './OvulationCalculator.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Ovulation Calculator</h1>
        <p>
            Use our ovulation calculator to predict when you might ovulate and boost your
            chances of getting pregnant. This tool helps you pinpoint your likely
            ovulation date and your most fertile window to set you up for baby-making
            success!
    </p>
      </header>

      <main>
        <OvulationCalculator />
      </main>

      <footer className="app-footer">
        <p>© 2024 Ovulation Calculator. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;







