import React, { Component } from 'react';

import Hero from './components/main/Hero';
import StayProductive from './components/main/StayProductive';
import EarlyAccess from './components/main/EarlyAccess';

export default class Main extends Component {
	render() {
		return (
			<main>
				<article>
					<h2 className="hide-elem">Main Article</h2>
					<Hero />
					<StayProductive />
					<EarlyAccess />
				</article>
			</main>
		);
	}
}
