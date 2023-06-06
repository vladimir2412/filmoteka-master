import { IMovieCard } from '../../types/types';
import Rating from './Rating';
import WishlistIcon from './WishlistIcon';
import { useActions } from '../../hooks/useActions';
import { useWatchlist } from '../../hooks/useWatchlist';
import { Link } from 'react-router-dom';
interface IMovie {
	movie: IMovieCard;
}
const MovieCard = ({ movie }: IMovie) => {
	const { toggleWatchlist } = useActions();
	const { watchlist } = useWatchlist();
	const isExist = watchlist.some((m: IMovieCard) => m.id === movie.id);

	const img_url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;
	const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : '';

	return (
		<>
			<Link to={`/${movie.id}`} className="flex flex-col gap-2 cursor-pointer">
				<div className="relative">
					<img src={img_url} alt={movie.title} className="w-[212px] rounded-lg" />
					<div className="absolute bottom-0 right-0">
						<Rating vote={movie.vote_average} />
					</div>
				</div>
				<div className="flex flex-col text-white hover:underline hover:underline-offset-2">
					<h1 className="font-bold">{movie.title}</h1>
				</div>
			</Link>
			<div
				onClick={() => toggleWatchlist(movie)}
				className="absolute top-3 right-[10px] w-[1.6rem] h-[1.6rem]"
			>
				<WishlistIcon isExist={isExist} />
			</div>
			<p className="font-normal text-stone-400">{releaseYear}</p>
		</>
	);
};

export default MovieCard;
