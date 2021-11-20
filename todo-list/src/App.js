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
      {title: "Di choi", isComplete: false},
      {title: "Di hoc", isComplete: true},
      {title: "Di ngu", isComplete: true}
    ];
  }
  render() {
    if (this.TodoItem.length > 0){
      return (
        <div className="App">{
          //render list from an array
          this.TodoItem.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
        </div>
      );
    } else {
      return (
        <div className="App">{'Nothing here.'}</div>
      )
    };
  }
}

export default App;
