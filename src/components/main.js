import React, { Component } from "react";
import Header from "./header.js";
import Quiz from "./quiz.js";
class Main extends Component{
	render() {
		return (
			<div>
				< Header />
				< Quiz />
			</div>
		)
	}
}

export default Main;