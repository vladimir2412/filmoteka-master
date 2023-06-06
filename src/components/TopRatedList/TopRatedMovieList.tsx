import { useGetTopRatedMoviesQuery } from '../../store/api/movie.api';
import MovieListCarousel from '../Carousel/MovieListCarousel';

const TopRatedMovieList = () => {
	const { data } = useGetTopRatedMoviesQuery(null);
	return (
		<div className="mt-14 mx-12">
			<span className="text-white font-semibold text-2xl">Top Rated</span>
			<MovieListCarousel data={data} />
		</div>
	);
};
export default TopRatedMovieList;
