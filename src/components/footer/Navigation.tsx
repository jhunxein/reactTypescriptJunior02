import React from 'react';

function Navigation() {
	return (
		<nav className="nav--wrapper">
			<ul className="footer--navbar">
				<li>
					<a href="/" className="footer__link">
						About Us
					</a>
				</li>
				<li>
					<a href="/" className="footer__link">
						Jobs
					</a>
				</li>
				<li>
					<a href="/" className="footer__link">
						Press
					</a>
				</li>
				<li>
					<a href="/" className="footer__link">
						Blog
					</a>
				</li>
			</ul>
			<ul className="footer--navbar">
				<li>
					<a href="/" className="footer__link">
						Contact Us
					</a>
				</li>
				<li>
					<a href="/" className="footer__link">
						Terms
					</a>
				</li>
				<li>
					<a href="/" className="footer__link">
						Privacy
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
