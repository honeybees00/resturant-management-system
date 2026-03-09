import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-between p-4 bg-gray-800 text-white">
			<h1 className="text-lg font-bold">Restaurant App</h1>

			<div className="space-x-4">
				<Link to="/" className="hover:text-gray-300">
					Home
				</Link>

				<Link to="/order" className="hover:text-gray-300">
					Order Now
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
