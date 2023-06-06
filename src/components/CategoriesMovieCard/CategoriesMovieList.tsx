import Loader from '../Loader/Loader';
import MovieCard from './MovieCard';

const CategoriesMovieList = ({ data, isLoading, sortOption }) => {
	const movies = data?.results;

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : (
				<div className="flex flex-wrap pl-10 gap-x-8 gap-y-5 mt-5">
					{movies.map((movie) => {
						return <MovieCard key={movie.id} movie={movie} />;
					})}
				</div>
			)}
		</>
	);
};
export default CategoriesMovieList;
