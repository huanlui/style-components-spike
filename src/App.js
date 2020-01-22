import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message, {MessageLevel} from './Message';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text="Don't remember to refactor" level={MessageLevel.Error}></Message>
      </header>
    </div>
  );
}

export default App;
