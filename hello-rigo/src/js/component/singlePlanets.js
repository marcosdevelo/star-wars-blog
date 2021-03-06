import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export class SinglePlanets extends React.Component {
	render() {
		//console.log(this.props.match.params.myId);
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store }) => {
								return (
									<React.Fragment>
										<div className="col-6">
											<img src="http://placehold.it/800x600" className="card-img-top" />
										</div>
										<div className="col-6">
											<h1>{store.planets[this.props.match.params.myId].name}</h1>
											<p>
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industrys standard dummy text ever
												since the 1500s, when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has survived not only five
												centuries, but also the leap into electronic typesetting, remaining
												essentially unchanged.1500s, when an unknown printer took a galley of
												type and scrambled it to make a type specimen book. It has survived not
												only five centuries, but also the leap into electronic typesetting,
												remaining essentially unchanged.1500s, when an unknown printer took a
												galley of type and scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into electronic
												typesetting, remaining essentially unchanged.
											</p>
										</div>
										<div className="row mt-5 container-fluid">
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Name</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].name}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Climate</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].climate}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Population</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].population}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Orbital Period</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].orbital_period}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Rotation Period</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].rotation_period}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Diameter</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.myId].diameter}
												</div>
											</div>
										</div>
									</React.Fragment>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
SinglePlanets.propTypes = {
	match: PropTypes.object
};
