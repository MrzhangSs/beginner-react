import React from 'react';

import { Router, Route, browserHistory } from "react-router"
import App from "./App.js";

import Main from "./main.js";

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={ App } />
		<Route path="/main" component={ Main }/>
		<Route path="/demo" component={ Main }/>
	</Router>
);

export default router;