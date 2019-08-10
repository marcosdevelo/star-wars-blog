import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://www.vectorlogo.es/wp-content/uploads/2019/04/logo-vector-star-wars.jpg" />
					</span>
				</Link>
				<div className="ml-auto" />
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdownMenuLink"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</nav>
		);
	}
}
