import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://www.vectorlogo.es/wp-content/uploads/2019/04/logo-vector-star-wars.jpg" />
					</span>
				</Link>

				<div className="ml-auto">
					<Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle caret>Favorite</DropdownToggle>
						<DropdownMenu>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.favorite.map((item, index) => {
										return (
											<DropdownItem key={index} header>
												<span>{item.name}</span>
												<button
													className="float-right"
													onClick={() => actions.removeFavorites(item, index)}>
													<i className="fas fa-trash-alt" />
												</button>
											</DropdownItem>
										);
									});
								}}
							</Context.Consumer>
						</DropdownMenu>
					</Dropdown>
				</div>
			</nav>
		);
	}
}
