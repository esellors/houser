import React from 'react';
import routes from './routes';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div id='app_container'>
      <Header />
      {routes}
    </div>
  );
}

export default App;
