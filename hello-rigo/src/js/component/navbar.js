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
						<Context.Consumer>
							{({ store }) => {
								return (
									<React.Fragment>
										<DropdownToggle caret>
											Favorite
											{" " + store.favorite.length}
										</DropdownToggle>
									</React.Fragment>
								);
							}}
						</Context.Consumer>

						<DropdownMenu>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.favorite.map((item, index) => {
										return (
											<DropdownItem key={index}>
												<span>{item.name}</span>
												<button onClick={() => actions.removeFavorites(item, index)}>
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
