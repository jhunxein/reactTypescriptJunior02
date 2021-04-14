import React from 'react';

import Address from './components/footer/Address';
import Navigation from './components/footer/Navigation';
import SocialMedia from './components/footer/SocialMedia';

function Footer() {
	return (
		<footer>
			<Address />
			<Navigation />
			<SocialMedia />
		</footer>
	);
}

export default Footer;
