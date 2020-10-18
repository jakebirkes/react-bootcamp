import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			<li>
				<Link to="/services">Services</Link>
			</li>
			<li>
				<Link to="/profile">Profile</Link>
			</li>
		</ul>
	</header>
);

export default Header;
