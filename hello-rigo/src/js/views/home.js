import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/characters";
import Planets from "../component/planets";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Characters</h1>
				<Characters />
				<h1>Planets</h1>
				<Planets />
			</div>
		);
	}
}
