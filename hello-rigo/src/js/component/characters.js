import React from "react";
import { Context } from "../store/appContext";
const Characters = () => {
	return (
		<div className="container">
			<div className="row">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.characters.map((item, index) => {
							return (
								<div key={index} className="card col-3">
									<img src="http://placehold.it/400x200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text">
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
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
export default Characters;
