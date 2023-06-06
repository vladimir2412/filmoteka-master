import { useState } from 'react';
import YoutubeVideo from './YoutubeVideo';

const HoverImage = ({ data, trailers, isLoading }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleClick = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const imgPoster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data?.poster_path}`;

	return (
		<>
			{isHovered ? (
				<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<img
						src={imgPoster}
						alt={data?.title}
						className="bg-center bg-cover bg-no-repeat rounded-xl h-[567px] blur-sm"
					/>
					<svg
						width="166"
						height="166"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
						onClick={handleClick}
					>
						<path d="M8 5V19L19 12L8 5Z" fill="#ECC94B" />
					</svg>
				</div>
			) : (
				<img
					src={imgPoster}
					alt={data?.title}
					className="bg-center bg-cover bg-no-repeat rounded-xl h-[567px]"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			)}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="fixed inset-0 bg-black opacity-75"></div>
					<div className="relative z-10 bg-black rounded-sm p-2">
						<p className="text-white font-bold">Official Trailer</p>
						<svg
							width="46"
							height="46"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute -top-10 -right-10 cursor-pointer"
							onClick={handleCloseModal}
						>
							<path
								d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
								fill="#ECC94B"
							/>
						</svg>
						<YoutubeVideo trailers={trailers} isLoading={isLoading} />
					</div>
				</div>
			)}
		</>
	);
};

export default HoverImage;
