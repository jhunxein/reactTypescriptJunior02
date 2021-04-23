import * as React from 'react';

import Address from './components/footer/Address';
import Navigation from './components/footer/Navigation';
import SocialMedia from './components/footer/SocialMedia';

import { ReactComponent as Logo } from './assets/images/logo.svg';

import './css/footer/footer.css';

function Footer() {
	return (
		<footer className="container--fluid footer">
			<div className="container footer__top">
				<a href="/" title="logo" className="footer--logo">
					<Logo className="footer__img" />
				</a>
			</div>
			<div className="container footer--wrapper">
				<Address />
				<Navigation />
				<SocialMedia />
			</div>
		</footer>
	);
}

export default Footer;
