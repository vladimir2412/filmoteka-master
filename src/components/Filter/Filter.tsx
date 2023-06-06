import { useState } from 'react';
import { useGetCategoryQuery } from '../../store/api/movie.api';
import Loader from '../Loader/Loader';
const Filter = ({ handleGenreClick, selectedGenres }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	const { data, isLoading } = useGetCategoryQuery(null);
	const genres = data?.genres.filter((genre) => genre.name !== 'TV Movie');
	console.log(selectedGenres);
	return (
		<div className="w-full">
			<div
				className="flex items-center justify-between px-4 py-2 text-lg font-medium text-white bg-neutral-700 cursor-pointer"
				onClick={toggleAccordion}
			>
				Filters
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
				<div className="px-4 py-2 bg-neutral-700/30">
					<p className="mb-2 text-white">Genres</p>
					{isLoading ? (
						<div className="flex justify-center items-center h-screen">
							<Loader />
						</div>
					) : (
						<div className="flex flex-wrap">
							{genres.map((genre) => {
								const isSelected = selectedGenres.includes(genre.id);
								const genreClassName = `bg-gray-100 border-2 border-gray-300 text-center rounded-full p-2 mr-1 mb-1 cursor-pointer ${
									isSelected
										? 'bg-yellow-400 border-yellow-500'
										: 'hover:bg-yellow-400 hover:border-yellow-500'
								}`;
								return (
									<p
										className={genreClassName}
										key={genre.id}
										onClick={() => handleGenreClick(genre.id)}
									>
										{genre.name}
									</p>
								);
							})}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Filter;
