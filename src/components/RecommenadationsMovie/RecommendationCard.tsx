import { Link } from 'react-router-dom';
import { IRecommendation } from '../../types/types';
import WishlistIcon from '../MovieCard/WishlistIcon';
import { useActions } from '../../hooks/useActions';
import { useWatchlist } from '../../hooks/useWatchlist';
import Rating from '../MovieCard/Rating';
import Loader from '../Loader/Loader';

interface IRecsProp {
	recs: IRecommendation;
	isLoading: boolean;
}
const RecommendationCard = ({ recs, isLoading }: IRecsProp) => {
	const { toggleWatchlist } = useActions();
	const { watchlist } = useWatchlist();
	const isExist = watchlist.some((r) => r.id === recs.id);
	const imgURL = recs.poster_path
		? `https://www.themoviedb.org/t/p/w220_and_h330_face/${recs.poster_path}`
		: '';
	const releaseYear = recs.release_date.slice(0, 4);
	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : (
				<>
					<Link to={`/${recs.id}`} className="cursor-pointer relative">
						<div className="relative">
							<img
								src={imgURL}
								alt={recs.original_title}
								className="w-[150px] h-[225px] rounded-lg"
							/>
							<div className="absolute bottom-0 right-1">
								<Rating vote={recs.vote_average} />
							</div>
						</div>
						<p className="text-white">{recs.title}</p>
					</Link>
					<div
						onClick={() => toggleWatchlist(recs)}
						className="absolute top-3 right-[10px] w-[1.6rem] h-[1.6rem]"
					>
						<WishlistIcon isExist={isExist} />
					</div>
					<p className="font-normal text-stone-400">{releaseYear}</p>
				</>
			)}
		</>
	);
};

export default RecommendationCard;
