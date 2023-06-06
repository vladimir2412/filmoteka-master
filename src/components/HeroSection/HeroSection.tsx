import { Link } from 'react-router-dom';
import Video from '../../UI/HeroSection/Video';

const HeroSection = () => {
	return (
		<div className="relative bg-neutral-950">
			<Video />
			<div className="absolute inset-0 ml-28 flex flex-col justify-center w-1/3 content-center text-white">
				<h1 className="text-6xl font-extrabold tracking-tight">New movies every week</h1>
				<p className="text-2xl mt-4">Add movies to your watchlist and watch for free</p>
				<Link className="w-1/4" to={'/sign-up/'}>
					<div className="justify-center text-black text-center mt-8 rounded-md bg-yellow-500 hover:bg-yellow-400 text-lg font-semibold select-none py-3 px-6">
						Sign Up
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
