import NavLinks from '../../UI/Nav/NavLinks';
import Auth from '../../UI/Nav/Auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex items-center fixed left-0 top-0 right-0 z-50 bg-black/50 backdrop-blur-lg rounded mx-auto px-6 py-2 mt-5 max-w-[1428px] w-full">
			<div className="flex space-x-6 w-3/5 shadow-sm">
				<Link to="/" className="text-white font-bold text-2xl">
					Logo
				</Link>
			</div>
			<NavLinks />
			<Auth />
		</div>
	);
};

export default Navbar;
