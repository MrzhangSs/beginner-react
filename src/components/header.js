import React, { Component } from "react";
import { Link }	from "react-router";
import "../styles/header.css"
class Header extends Component{
	render() {
		return (
			<div className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
					  <a className="navbar-brand hidden-sm">react-demo</a>
					</div>
					<div className="navbar-collapse collapse" role="navigation">
					  <ul className="nav navbar-nav">
						<li className="hidden-sm hidden-md">
							<Link to="/" activeClassName="active">
								主页
							</Link>
						</li>
						<li>
							<Link to="/main" activeClassName="active">
								问答
							</Link>
						</li>
						<li>
							<Link to="/demo" activeClassName="active">
								网站实例
							</Link>
						</li>
					  </ul>
					</div>
				</div>
			</div>
		)
	}
}


export default Header;