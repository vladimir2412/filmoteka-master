import { useRef, useState } from 'react';
import CategoriesMovieList from '../../components/CategoriesMovieCard/CategoriesMovieList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/NavbarSecond/Navbar';
import Search from '../../components/Search/Search';
import Sort from '../../components/Sort/Sort';
import {
	useGetFilterByGenresQuery,
	useGetPopularQuery,
	useGetSearchQuery,
} from '../../store/api/movie.api';

const Categories = () => {
	const { data, isLoading } = useGetPopularQuery(null);

	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState('');

	const { data: searchResults } = useGetSearchQuery(inputValue);
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (inputRef.current) inputRef.current.value = event.target.value;
		setTimeout(() => {
			setInputValue(event.target.value);
		}, 700);
	};

	const [selectedGenres, setSelectedGenres] = useState([]);
	const { data: filteredGenres } = useGetFilterByGenresQuery(selectedGenres);
	const handleGenreClick = (genreId) => {
		const isSelected = selectedGenres.includes(genreId);
		if (isSelected) {
			setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
		} else {
			setSelectedGenres([...selectedGenres, genreId]);
		}
	};

	const [sortOption, setSortOption] = useState('popularity.desc');
	const handleSortChange = (event) => {
		setSortOption(event.target.value);
	};

	let displayedData = data;
	if (inputValue) {
		displayedData = searchResults;
	} else if (selectedGenres.length > 0) {
		displayedData = filteredGenres;
	}

	return (
		<div className="px-14 pt-24 max-w-[1560px] select-none">
			<Navbar />
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : (
				<>
					<div className="text-yellow-400 font-semibold underline underline-offset-8">
						Categories
					</div>
					<div className="flex">
						<div className="w-[30%] mt-5">
							<Search handleInput={handleInput} inputRef={inputRef} />
							<Sort handleSortChange={handleSortChange} />
							<Filter handleGenreClick={handleGenreClick} selectedGenres={selectedGenres} />
						</div>
						<div className="w-[70%]">
							<CategoriesMovieList
								data={displayedData}
								isLoading={isLoading}
								sortOption={sortOption}
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Categories;
