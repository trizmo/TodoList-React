import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Route handling
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid'; // randomized id's
import axios from 'axios';
import './App.css';

class App extends Component {

  // Our data is currently hardcoded for now
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(res => this.setState(( { todos: res.data } )))

  }

  // the function that toggles the state
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }


  // Delete Todo 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }


  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }


  // This is what renders to the main app page
  // the header component is being imported in and will be shown for all routes because it's not assigned a path
  // then it had render route exact path for root, that will display addTodo and Todos classes
  // if path is /about, then it will display the About component
  render() {
    return (

      // the router is used for all the path stuff. 
      <Router>
        <div className="App">
          <div className="container">
            <Header /> {/*header component is being imported in and will be shown for all routes (i think by default: because header) */}
            <Route exact path="/" render={props => (
              <React.Fragment> {/* is similar to a div but it doesn't show up, a ghost element; here we add the two classes, AddToDo and Todos */}
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            {/* Routing for about me page*/}
            <Route path='/about' component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
