import React from 'react';
import CardInfo from './CardInfo';
import TransactionsTable from './TransactionsTable';
import './index.css'; // Import tailwind styles

function App() {
  return (
    <div className="container mx-auto p-4">
      <CardInfo />
      <TransactionsTable />
    </div>
  );
}

export default App;