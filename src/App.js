import React from 'react';
import routes from './routes';
import './App.css';
import Header from './Components/Header/Header';

function App(props) {
  return (
    <div id='app_container'>
      <Header />
      <main>
        {routes}
      </main>
    </div>
  );
}

export default App;
