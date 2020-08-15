import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Home from "Pages/Home";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import Timer from "Pages/Timer";
import Header from "Components/Header";
import Footer from "Components/Footer";

class App extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	isLogin: false,
		// 	userinfo: {},
		// };
	}
	/*:
	 */
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/timer" component={Timer} />
					<Footer />
					<Redirect from="*" to="/" />
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
