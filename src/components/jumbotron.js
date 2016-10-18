import React ,{ Component }	from "react";
import "../styles/jumbotron.css";
class Jumbotron extends Component{
	render() {
		return (
			<div className="jumbotron masthead">
			    <div className="container">
					<h1>React</h1>
					<h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>
					<p className="masthead-button-links">
					  <a className="btn btn-lg btn-primary btn-shadow" href="http://react-china.org/" target="_blank">react中文社区</a>
					</p>
			    </div>
			</div>
		)
	}
}

export default Jumbotron;