import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import DataLoader from './DataLoader';

function App() {
  //this.state = { buttonText: "Click me, please" }
  const [buttonText, setButonText] = useState("NEW VERSION: Click me, please");

  function handleClick() {
    return setButonText("Thanks, been clicked!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        <button onClick={handleClick}>{ buttonText }</button>
        <DataLoader
          render={data => {
            return (
              <div>
                <ul>
                  {data.map(el => (
                    <li key={el.id}>{el.name}</li>
                  ))}
                </ul>
              </div>
            );
          }}
        />
      </header>
    </div>
  );
}

export default App;
