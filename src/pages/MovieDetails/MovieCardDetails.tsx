import {
	useGetBilledCastQuery,
	useGetMovieDetailsQuery,
	useGetMovieTrailersQuery,
	useGetRecommendationsQuery,
} from '../../store/api/movie.api';
import { useParams } from 'react-router-dom';
import { formatDate } from './format';
import { formatTime } from './format';
import Navbar from '../../components/NavbarMain/Navbar';
import CastList from '../../components/Carousel/CastList';
import Genres from '../../UI/MoviePage/Genres/Genres';
import RecommendationsList from '../../components/RecommenadationsMovie/RecommendationsList';
import { useActions } from '../../hooks/useActions';
import { useWatchlist } from '../../hooks/useWatchlist';
import MoviePageIcon from './MoviePageIcon';
import HoverImage from './HoverImage';

const MovieCardDetails = () => {
	const { id } = useParams();
	const { data } = useGetMovieDetailsQuery(id);
	const { data: actors, isLoading: isLoadingActors } = useGetBilledCastQuery(id);
	const { data: recommendations, isLoading: isLoadingRecommendations } =
		useGetRecommendationsQuery(id);
	const { data: trailers, isLoading: isLoadingTrailers } = useGetMovieTrailersQuery(id);

	const { toggleWatchlist } = useActions();
	const { watchlist } = useWatchlist();
	let isExist;
	if (data) {
		isExist = watchlist.some((d: { id: number }) => d.id === data.id);
	}
	const imgBackdrop = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
		data?.backdrop_path || data?.poster_path
	}`;
	const roundedVote = data?.vote_average.toFixed(1);

	return (
		<div className="relative w-fit">
			<Navbar />
			<img
				src={imgBackdrop}
				alt={data?.original_title}
				className="bg-center bg-cover bg-no-repeat w-full"
			/>
			<div className="absolute inset-0 top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/50 to-body-color w-full h-[87vh]" />
			<div className="relative top-0 max-w-[1260px] mx-auto -mt-[500px] flex flex-wrap">
				<div className="w-[30%]">
					<div className="bg-black/30 rounded-xl select-none relative">
						<HoverImage data={data} trailers={trailers} isLoading={isLoadingTrailers} />
						<div className="py-2" onClick={() => toggleWatchlist(data)}>
							<MoviePageIcon isExist={isExist} />
						</div>
					</div>
				</div>
				<div className="w-[70%] pl-8 text-white">
					<p className="font-bold text-4xl">{data?.title}</p>
					<p>
						{formatDate(data?.release_date)} <span className="text-xl">&#x2022;</span>{' '}
						{formatTime(data?.runtime)}
					</p>
					<div className="flex mt-2 space-x-1 object-center">
						<svg
							width="47"
							height="24"
							viewBox="0 0 47 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="47" height="24" rx="4" fill="#ECC94B" />
							<path
								d="M10.7953 7.27273V16H8.6859V7.27273H10.7953ZM12.1195 7.27273H14.7317L16.9476 12.6761H17.0499L19.2658 7.27273H21.878V16H19.824V10.6392H19.7516L17.655 15.9446H16.3425L14.2459 10.6094H14.1735V16H12.1195V7.27273ZM26.4196 16H23.1937V7.27273H26.4153C27.3045 7.27273 28.0701 7.44744 28.7122 7.79688C29.3571 8.14347 29.8542 8.64347 30.2037 9.29688C30.5531 9.94744 30.7278 10.7259 30.7278 11.6321C30.7278 12.5412 30.5531 13.3224 30.2037 13.9759C29.8571 14.6293 29.3613 15.1307 28.7164 15.4801C28.0716 15.8267 27.3059 16 26.4196 16ZM25.3031 14.2017H26.3386C26.8272 14.2017 27.2406 14.1193 27.5787 13.9545C27.9196 13.7869 28.1767 13.5156 28.35 13.1406C28.5261 12.7628 28.6142 12.2599 28.6142 11.6321C28.6142 11.0043 28.5261 10.5043 28.35 10.1321C28.1738 9.7571 27.9139 9.48722 27.5701 9.32244C27.2292 9.15483 26.8088 9.07102 26.3088 9.07102H25.3031V14.2017ZM31.9593 16V7.27273H34.0431V10.5753H34.0858C34.171 10.3764 34.2917 10.1847 34.448 10C34.6071 9.81534 34.8088 9.66477 35.0531 9.5483C35.3002 9.42898 35.5957 9.36932 35.9395 9.36932C36.394 9.36932 36.8187 9.48864 37.2136 9.72727C37.6113 9.96591 37.9324 10.3338 38.1767 10.831C38.421 11.3281 38.5431 11.9616 38.5431 12.7315C38.5431 13.473 38.4252 14.0938 38.1895 14.5938C37.9565 15.0938 37.6412 15.4688 37.2434 15.7188C36.8485 15.9688 36.4096 16.0938 35.9267 16.0938C35.5971 16.0938 35.3116 16.0398 35.0701 15.9318C34.8287 15.8239 34.6255 15.6818 34.4608 15.5057C34.2988 15.3295 34.1738 15.1406 34.0858 14.9389H34.0218V16H31.9593ZM34.0005 12.7273C34.0005 13.0795 34.0474 13.3864 34.1412 13.6477C34.2377 13.9091 34.3755 14.1122 34.5545 14.2571C34.7363 14.3991 34.9537 14.4702 35.2065 14.4702C35.4622 14.4702 35.6795 14.3991 35.8585 14.2571C36.0375 14.1122 36.1724 13.9091 36.2633 13.6477C36.3571 13.3864 36.4039 13.0795 36.4039 12.7273C36.4039 12.375 36.3571 12.0696 36.2633 11.8111C36.1724 11.5526 36.0375 11.3523 35.8585 11.2102C35.6824 11.0682 35.465 10.9972 35.2065 10.9972C34.9508 10.9972 34.7335 11.0668 34.5545 11.206C34.3755 11.3452 34.2377 11.544 34.1412 11.8026C34.0474 12.0611 34.0005 12.3693 34.0005 12.7273Z"
								fill="black"
							/>
						</svg>
						<p className="font-bold">{roundedVote}</p>
					</div>
					<div className="mt-5">{data && <Genres data={data} />}</div>
					<div className="mt-5">
						<p className="font-bold text-2xl">Overview</p>
						<p>{data?.overview}</p>
					</div>
					<div className="flex space-x-20 mt-5">
						<div className="flex flex-col">
							<p className="font-bold">Status</p>
							<p>{data?.status}</p>
						</div>
						<div className="flex flex-col">
							<p className="font-bold">Original language</p>
							<p>{data?.original_language}</p>
						</div>
						<div className="flex flex-col">
							<p className="font-bold">Budget</p>
							<p>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									data?.budget,
								)}
							</p>
						</div>
						<div className="flex flex-col">
							<p className="font-bold">Revenue</p>
							<p>
								{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
									data?.revenue,
								)}
							</p>
						</div>
					</div>
					<div className="mt-5">
						<p className="text-white font-bold text-2xl">Top Billed Cast</p>
						<CastList actors={actors} isLoading={isLoadingActors} />
					</div>
				</div>
				<div className="w-[100%] mt-5">
					<p className="text-white font-bold text-2xl mt-5">You may also like</p>
					<RecommendationsList
						recommendations={recommendations}
						isLoading={isLoadingRecommendations}
					/>
				</div>
			</div>
		</div>
	);
};

export default MovieCardDetails;
