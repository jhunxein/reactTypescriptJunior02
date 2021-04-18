import React from 'react';

import Navigation from './components/header/Navigation';
import './css/header/header.css';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="container header">
			<Navigation isMenuOpen={isMenuOpen} />
			<button
				type="button"
				className="burger--menu"
				aria-expanded="false"
				aria-controls="menuItems"
				onClick={toggleMenu}
			>
				<div
					id="line1"
					className={`${
						isMenuOpen ? 'burger__lines burger__active' : 'burger__lines'
					}`}
				></div>
				<div
					id="line2"
					className={`${
						isMenuOpen ? 'burger__lines burger__active' : 'burger__lines'
					}`}
				></div>
			</button>
		</header>
	);
}

export default Header;
