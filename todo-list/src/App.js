import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem.js';
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    //array for data 
    this.TodoItem = [
      "Di choi",
      "Di hoc",
      "Di ngu"
    ];
  }
  render() {
    return (
      <div className="App">{
        //render list from an array
        this.TodoItem.map((item, index) => <TodoItem key={index} title={item} />)
      }
          {/* <TodoItem title="Di choi"/>
          <TodoItem title="Di hoc"/>
          <TodoItem title="Di ngu"/> */}
      </div>
    );
  }
}

export default App;
