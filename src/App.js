//import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Portfolio } from "./components/Portfolio/Portfolio";
import { Login } from "./components/Admin/Login/Login";
import { Add } from "./components/Admin/Add/Add";
import { Edit } from "./components/Admin/Edit/Edit";

import "./assets/scss/main.scss";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/admin/login">
						<Login />
					</Route>
					<Route path="/admin/add">
						<Add />
					</Route>
					<Route path="/admin/edit/:workId">
						<Edit />
					</Route>
					<Route>
						<Portfolio />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
