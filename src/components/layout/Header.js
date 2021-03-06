import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header style={headerStyle}>
      <h1>TodoList App v1.0</h1>
      <Link style={ linkStyle } to="/">Home</Link> | <Link style={ linkStyle } to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  borderRadius: '20px',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'Arial',
}
export default Header;