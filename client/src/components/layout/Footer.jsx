import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<footer className="bg-dark text-light mt-5 p-3 text-center">
			<ul className="navbar-nav">
				<li className="nav-item">
					<small className="nav-link">
						Copyright &copy; {new Date().getFullYear()} David Mayes |{' '}
						<Link className="text-light" to="/login">
							Admin
						</Link>
					</small>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
