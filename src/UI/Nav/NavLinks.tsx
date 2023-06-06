import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Categories from '../../UI/Nav/Categories';

const NavLinks = () => {
	// const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
	return (
		<div className="flex justify-center space-x-6 text-base font-bold w-1/5 shadow-sm">
			<Link to="/categories">
				<span className="text-white font-bold">Categories</span>
			</Link>
			{/* <span
				className="text-white font-bold relative"
				onClick={() => setIsCategoriesVisible((prev) => !prev)}
				onMouseEnter={() => setIsCategoriesVisible(true)}
			>
				Categories
				{isCategoriesVisible && <Categories />}
			</span> */}
			<Link to="/watchlist">
				<span className="text-white font-bold">Watchlist</span>
			</Link>
		</div>
	);
};

export default NavLinks;
