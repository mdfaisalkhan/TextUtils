import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-${props.mode}`}>
    <div className="nav-container">
     <h1><a className={`navbar-brand navbar-brand-${props.mode}`} to="/">{props.title}</a></h1>
    </div>
 <div className="menu ">
    <ul>
     {/* <li><Link className={`menuA-${props.mode}`} to='/'>Home</Link></li> */}
     <li><a className={`menuA-${props.mode}`} to='/'>Home</a></li>
     {/* <li><Link className={`menuA-${props.mode}`} to='/about'>{props.aboutText}</Link></li> */}
     <li><a className={`menuA-${props.mode}`} href='/'>Contact</a></li>
    </ul>
 </div>
 <div className="darkBtn">
    <label className="switch">
      <input onClick={props.toggleMode} type="checkbox"/>
      <span className="slider round"></span>
    </label>
      <span className={`dark-text dark-${props.mode}`}>{props.switchText}</span>
 </div>
 </nav>
  )
}

Navbar.propTypes = {title : PropTypes.string,
aboutText: PropTypes.string,}

Navbar.defaultProps  = {
  title: 'Set Title here',
  aboutText: 'Set About here',
}