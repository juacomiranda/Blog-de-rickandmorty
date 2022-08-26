import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 bg-color"> 
			<Link to="/">
			<a className="navbar-brand ms-5" href="#">
				<img src={logoImage} width="150" />
    		</a>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5">Favorite</button>
				</Link>
			</div>
		</nav>
	);
};
