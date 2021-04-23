import * as React from 'react';
import logo from './../../assets/images/logo.svg';
import './../../css/header/navigation.css';

function Navigation(props: {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [windowSize, setWindowSize] = React.useState(0);

	const refNavbarContainer = React.useRef(null);

	const handleResizeWindow = React.useCallback(() => {
		const width = window.innerWidth;
		if (width > 769) {
			props.setIsMenuOpen(false);
		}
		setWindowSize(width);
	}, [props]);

	React.useEffect(() => {
		handleResizeWindow();
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, [handleResizeWindow]);

	return (
		<nav className="nav">
			<a href="/" title="logo" className="nav--logo" tabIndex={1}>
				<img src={logo} alt="" className="nav__img" />
			</a>

			<ul
				id="menuItems"
				className={`${props.isMenuOpen ? 'navbar navbar__show' : 'navbar'}`}
				ref={refNavbarContainer}
			>
				<li className="nav--tab">
					<a
						href="/"
						className="nav__link"
						tabIndex={windowSize > 769 || props.isMenuOpen ? 1 : -1}
					>
						Features
					</a>
				</li>
				<li className="nav--tab">
					<a
						href="/"
						className="nav__link"
						tabIndex={windowSize > 769 || props.isMenuOpen ? 1 : -1}
					>
						Teams
					</a>
				</li>
				<li className="nav--tab">
					<a
						href="/"
						className="nav__link"
						tabIndex={windowSize > 769 || props.isMenuOpen ? 1 : -1}
					>
						Sign In
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
