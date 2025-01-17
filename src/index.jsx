import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Main component
import './index.css'; // Optional for custom styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Renders App component inside the root div of index.html
);
