import React, { Component } from 'react';

import Navigation from './components/header/Navigation';

export default class Header extends Component {
	render() {
		return (
			<header>
				<Navigation />
			</header>
		);
	}
}
