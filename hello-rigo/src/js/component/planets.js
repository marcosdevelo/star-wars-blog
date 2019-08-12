import React from "react";
import { Context } from "../store/appContext";
const Planets = () => {
	return (
		<div className="container">
			<div className="card-deck">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.planets.map((item, index) => {
							return (
								<div key={index} className="card">
									<img src="http://placehold.it/400x200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">
											Population:
											{item.population} Terrain:
											{item.terrain}
										</p>

										<button type="button" className="btn btn-outline-primary">
											Learn More!
										</button>
										<button type="button" className="btn btn-outline-info">
											<i className="far fa-heart" />
										</button>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		</div>
	);
};
export default Planets;
