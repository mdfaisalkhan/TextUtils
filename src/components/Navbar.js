import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  let myStyle={
    backgroundColor:props.mode ==='dark'?'white':'black'
  }
 let myStyle1={
    backgroundColor:props.mode ==='dark'?'black':'rgb(227, 226, 226)'
  }
 
  const toggleHam = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  const closeMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  };

  return (
    <nav className={`navbar navbar-${props.mode}`}>
    <div className="nav-container">
     <h1><a className={`navbar-brand navbar-brand-${props.mode}`} href="/">{props.title}</a></h1>
    </div>
 <div className="menu ">
    <ul className='nav-menu' style={myStyle1}>
     // <li><Link className={`menuA-${props.mode}`} to='/'>Home</Link></li>
     <li><a className={`menuA-${props.mode}`} href='/'>Home</a></li>
     // <li><Link className={`menuA-${props.mode}`} to='/about'>{props.aboutText}</Link></li>
     <li><a className={`menuA-${props.mode}`} href='/about'>{props.aboutText}</a></li>
     <li><a className={`menuA-${props.mode}`} href='/'>Contact</a></li>
 <div className="darkBtn">
    <label className="switch">
      <input onClick={props.toggleMode} type="checkbox"/>
      <span className="slider round"></span>
    </label>
      <span className={`dark-text dark-${props.mode}`}>{props.switchText}</span>
 </div>
    </ul>
    <div class="hamburger"onClick={toggleHam}>
                    <span class="bar" style={myStyle} ></span>
                    <span class="bar" style={myStyle} ></span>
                    <span class="bar" style={myStyle} ></span>
                </div>
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
