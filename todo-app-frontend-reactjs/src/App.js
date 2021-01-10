import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="container fluid">
        <TodoApp />
      </div>
    );
  }
}

export default App;