import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
    <a href="/">Studyhelpline</a>
    </div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="https://wa.me/9250192507" target="_blank"> Contact</a></li>
      <li><a href="register">Tutor Registration</a></li>
    </ul>
  </nav>
  )
}

export default Navbar