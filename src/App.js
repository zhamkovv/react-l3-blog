import React from 'react';
import './App.css';
import Feed from './Feed';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src="https://cdn3.f-cdn.com/contestentries/114457/10540864/5446245b3d5f7_thumb900.jpg" className="App-logo" alt="logo" />
        <h1>
  лучшие мемы автомира
        </h1>
      </header>
      <div className="App-content">
      {data.map(props => Feed(props))}
      </div>
    </div>
  );
}

export default App;
