import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Child></Child>
      </header>
    </div>
  );
}

export default App;
