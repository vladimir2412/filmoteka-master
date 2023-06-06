import { useGetUpcomingMoviesQuery } from '../../store/api/movie.api';
import MovieListCarousel from '../Carousel/MovieListCarousel';

const UpcomingMovieList = () => {
	const { data } = useGetUpcomingMoviesQuery(null);
	return (
		<div className="mt-14 mx-12">
			<span className="text-white font-semibold text-2xl">Upcoming</span>
			<MovieListCarousel data={data} />
		</div>
	);
};
export default UpcomingMovieList;
