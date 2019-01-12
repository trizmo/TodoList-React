import React, { Component } from 'react'
import PropTypes from 'prop-types';

// The Todo Class: This is where we build the each todo
export class TodoItem extends Component {
  getStyle = () => {
    return {
      color: '#524948',
      backgroundColor: 'lightgrey',
      borderBottom: '1px darkgrey solid',
      padding: '10px 5px',
      fontFamily: 'Arial',
      textDecoration: this.props.todo.completed ? 
      'Line-through' : 'none'
      
    }
  }
  
  
  render() {
    // This shortens this.props.todo.id or this.props.todo.title to just id or title
    // This binds the markComplete and delTodo to the id
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)} >x</button>
        </p>
      </div>
    )
  }
}

// PropTypes: declaring the types of props
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

// create the style as a js object, and you can inject it in the jsx in render() inside {btnStyle}
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '1px 5px',
  borderRadius: "50%",
  curser: 'pointer',
  float: 'right'
}


export default TodoItem