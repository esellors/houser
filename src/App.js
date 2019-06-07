import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Wizard />
    </div>
  );
}

export default App;
