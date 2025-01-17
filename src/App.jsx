import React from 'react';
import CardInfo from './CardInfo';
import TransactionsTable from './TransactionsTable';
import './index.css'; // Import tailwind styles

function App() {
  return (
    <div id="root">
      <CardInfo />
      <TransactionsTable />
    </div>
  );
}

export default App;