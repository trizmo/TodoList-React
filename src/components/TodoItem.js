import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      color: '#524948',
      backgroundColor: 'lightgrey',
      borderBottom: '1px darkgrey solid',
      padding: '5px 10px',
      fontFamily: 'Arial',
      textDecoration: this.props.todo.completed ?
      'Line-through' : 'none'
    }
  }
  
  render() {
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

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '1px 5.5px',
  borderRadius: "50%",
  curser: 'pointer',
  float: 'right'
}


export default TodoItem