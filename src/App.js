import React from 'react';
import routes from './routes';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

function App() {
  return (
    <div id='app_container'>
      <Header />
      {routes}
    </div>
  );
}

export default App;
