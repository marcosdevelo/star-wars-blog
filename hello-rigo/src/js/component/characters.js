import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Characters = () => {
	{
		return (
			<div className="container ">
				<div className="card-deck ">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								return (
									<div key={index} className="card">
										<img src="http://placehold.it/400x200" className="card-img-top1" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">
												<ul>
													<li>
														Gender:
														{item.gender}
													</li>
													<li>
														{" "}
														Hair Color:
														{item.hair_color}
													</li>
													<li>
														{" "}
														Eye Color:
														{item.eye_color}
													</li>
												</ul>
											</p>
											<Link to={"/single-people/" + item.name + "/" + index}>
												<button type="button" className="btn btn-outline-primary ">
													Learn More!
												</button>
											</Link>
											<button
												onClick={() => actions.markAsFavorite(index, item.name)}
												type="button"
												className="btn btn-outline-info float-right mr-3">
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
	}
};
export default Characters;
