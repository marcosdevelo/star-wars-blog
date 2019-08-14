import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export class SinglePeople extends React.Component {
	render() {
		//console.log(this.props.match.params.myId);
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<Context.Consumer>
							{({ store }) => {
								return (
									<React.Fragment>
										<div className="col-6">
											<img src="http://placehold.it/800x600" className="card-img-top" />
										</div>
										<div className="col-6">
											<h1>{store.characters[this.props.match.params.myId].name}</h1>
											<span>
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
											</span>
										</div>
										<div className="row mt-5 container-fluid">
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Name</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].name}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Birth Year</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].birth_year}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Gender</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].gender}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Height</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].height}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Skin Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].skin_color}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Eye Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.myId].eye_color}
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
SinglePeople.propTypes = {
	match: PropTypes.object
};
