import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/characters";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<Characters />
			</div>
		);
	}
}
