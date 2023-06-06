import { useState } from 'react';

const Sort = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="w-full">
			<div
				className="flex items-center justify-between px-4 py-2 text-lg font-medium text-white bg-neutral-700 cursor-pointer"
				onClick={toggleAccordion}
			>
				Sort
				<span className="inline-block ml-2 transform duration-200">
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-yellow-400 ml-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 15l7-7 7 7"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-yellow-400 ml-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					)}
				</span>
			</div>
			{isOpen && (
				<div className="py-2 px-5 bg-neutral-700/30">
					<p className="text-white mb-2">Sort Results By</p>
					<select className="block w-full py-2 px-3 bg-gray-100 shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm cursor-pointer">
						<option>Popularity Ascending</option>
						<option>Popularity Descending</option>
						<option>Rating Ascending</option>
						<option>Rating Descending</option>
						<option>Title (A-Z)</option>
						<option>Title (Z-A)</option>
					</select>
				</div>
			)}
		</div>
	);
};

export default Sort;
