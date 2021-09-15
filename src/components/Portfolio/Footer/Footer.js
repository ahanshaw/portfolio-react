import {Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer className="portfolio__footer">
			<small>&copy;{new Date().getFullYear()} Angela Hanshaw</small>
			<Link to={`/admin/login`}>Log In</Link>
		</footer>
	);
}