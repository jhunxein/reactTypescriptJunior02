import * as React from 'react';
import logo from './../../assets/images/logo.svg';
import './../../css/header/navigation.css';

function Navigation(props: { isMenuOpen: boolean }) {
	const [windowSize, setWindowSize] = React.useState(0);

	const refNavbarContainer = React.useRef(null);

	const handleResizeWindow = () => {
		const width = window.innerWidth;
		setWindowSize(width);
	};

	React.useEffect(() => {
		handleResizeWindow();
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<nav className="nav">
			<a href="/" title="logo" className="nav--logo">
				<img src={logo} alt="" className="nav__img" />
			</a>

			<ul
				id="menuItems"
				className={`${props.isMenuOpen ? 'navbar navbar__show' : 'navbar'}`}
				ref={refNavbarContainer}
			>
				<li className="nav--tab">
					<a href="/" className="nav__link" tabIndex={windowSize > 769 ? 1 : -1}>
						Features
					</a>
				</li>
				<li className="nav--tab">
					<a href="/" className="nav__link" tabIndex={windowSize > 769 ? 1 : -1}>
						Teams
					</a>
				</li>
				<li className="nav--tab">
					<a href="/" className="nav__link" tabIndex={windowSize > 769 ? 1 : -1}>
						Sign In
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
