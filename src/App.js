import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish React To-Do List App',
        completed: false
      },
      {
        id: 2,
        title: 'Complete one algo on the whiteboard',
        completed: false
      },
      {
        id: 3,
        title: 'Start creating a React Native app',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }
  

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
      <div className="container">

      </div>

      <Header />
      <AddTodo />
      <Todos todos={this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo}/>
      
      </div>
    );
  }
}

export default App;
