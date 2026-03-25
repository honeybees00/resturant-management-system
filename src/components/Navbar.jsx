
import {NavLink } from "react-router-dom";
import React from 'react'

export const Navbar = () => {
  return (
	<nav className="d-flex justify-content-between align-items-center p-4 bg-success">
		<NavLink to="/">Home</NavLink>
		<NavLink to='/order'>Order Page</NavLink>
		<NavLink to='/chatbot'>ChatBot</NavLink>
		<NavLink to='/menu'>Menu</NavLink>
	</nav>
  )
}
