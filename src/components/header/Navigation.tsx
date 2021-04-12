import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';

export default class Navigation extends Component {
	render() {
		return (
			<nav className="nav">
				<a href="/" className="nav--logo">
					<img src={logo} alt="" className="nav--logo__img" />
				</a>
				<ul className="navbar">
					<li className="nav--tab">
						<a href="/" className="nav--link">
							Features
						</a>
					</li>
					<li className="nav--tab">
						<a href="/" className="nav--link">
							Teams
						</a>
					</li>
					<li className="nav--tab">
						<a href="/" className="nav--link">
							Sign In
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
