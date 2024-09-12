// src/Header.js

import React, { useState } from 'react';
import logo from "../Images/clinic-logo.png"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'; // Import the CSS for styling

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
      <div>
      <img src={logo} style={{width:"60px",height:"60px",marginRight:"40px"}}/>
			<h3>MVM NATURE CURE HEALTH CENTRE</h3>
      </div>
			<nav ref={navRef}>
				<a style={{fontWeight:"700"}} href="/#">Home</a>
				<a style={{fontWeight:"700"}} href="/About">About Us</a>
				<a style={{fontWeight:"700"}} href="/#">Our Services</a>
				<a style={{fontWeight:"700"}} href="/#">Our Doctors</a>
        <a style={{fontWeight:"700"}} href="/#">Contact Us</a>
        <a style={{fontWeight:"700"}} href="/#">Pricing</a>
        {/* <button className='navbutton'>Book Appointment</button>
        <button className='navbutton'> +91 7259977110</button> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;