import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								return (
									<div key={index} className="card mb-3" style="max-width: 540px;">
										<div className="row no-gutters">
											<div className="col-md-4">
												<img src="..." className="card-img" alt="..." />
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<h5 className="card-title">Card title</h5>
													<p className="card-text">
														This is a wider card with supporting text below as a natural
														lead-in to additional content. This content is a little bit
														longer.
													</p>
													<p className="card-text">
														<small className="text-muted">Last updated 3 mins ago</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
